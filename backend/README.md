# Origami99 Admin API — Node.js + MySQL

Self-hosted backend for the marketing site's public lead forms and the `/admin` panel.
Every submitted lead is written to MySQL **and** emailed to `engage@origami99.com`.

The frontend (this Lovable project) is already wired to talk to this API. Set
`VITE_ADMIN_API_URL=http://localhost:3001` in the project's root `.env`, restart
the dev server, and every form + admin screen starts hitting your local backend.

## Quick start

```bash
# 1. Install dependencies
cd backend
npm install

# 2. Create the database and tables (MySQL 8+ recommended)
mysql -u root -p < schema.sql

# 3. Configure environment
cp .env.example .env
#    - Fill in DB_* with your MySQL credentials
#    - Fill in SMTP_* with any SMTP provider (Gmail app password works fine)
#    - Set a long random JWT_SECRET

# 4. Create your first admin user
node scripts/create-admin.js "Your Name" "you@origami99.com" "your-strong-password"

# 5. Run the API
npm start
# -> Origami99 API listening on http://localhost:3001
```

Test the public lead endpoint from anywhere:

```bash
curl -X POST http://localhost:3001/leads \
  -H 'Content-Type: application/json' \
  -d '{"name":"Test","email":"you@example.com","message":"Hello","source":"curl"}'
```

You should get `201` back, a row in the `leads` table, and an email at
`engage@origami99.com` within a few seconds.

## Wire the Lovable frontend to this API

In the project root (not `backend/`), create `.env`:

```
VITE_ADMIN_API_URL=http://localhost:3001
```

Restart the dev server (`bun dev` / `npm run dev`). From this point on:

- Every website contact form (`Contact.tsx`) posts to `POST /leads` here.
- `/admin` login uses `POST /auth/login` with your seeded admin credentials.
- `/admin/leads` shows real rows from MySQL.
- Blog and services also read/write here (a stale-tolerant seed still runs when a slug is missing).

For production, deploy this API somewhere and change `VITE_ADMIN_API_URL` to
the public URL. Set `CORS_ORIGIN` on the server to include the live site's URL.

## Endpoints

Field names in JSON match `src/lib/admin/types.ts` in the Lovable project.
See `../ADMIN_API_SPEC.md` for the full contract.

| Method | Path | Auth | Notes |
|---|---|---|---|
| POST | `/auth/login` | public | Returns `{ token, user }` |
| GET  | `/auth/me` | JWT | Restore session |
| POST | `/auth/logout` | JWT | No-op, client drops token |
| **POST** | **`/leads`** | **public** | **Site contact form + email notify** |
| GET / PATCH / DELETE | `/leads` | JWT | Admin management |
| GET | `/services`, `/blogs` | public | Public reads for the marketing site |
| POST / PATCH / DELETE | `/services`, `/blogs`, `/portfolio`, `/pages`, `/users` | JWT + role | Admin CRUD |
| POST | `/uploads` (multipart) | JWT | Returns `{ url }`; files served from `/uploads/*` |
| GET | `/analytics/summary` | JWT | Dashboard totals from real MySQL data |

## Emailing

`src/email.js` uses `nodemailer` with any SMTP provider. The lead notification
is sent asynchronously — an SMTP failure never blocks the DB insert, and the
error is logged to the server console. Set:

```
SMTP_HOST=smtp.your-provider.com
SMTP_PORT=587
SMTP_USER=you@your-provider.com
SMTP_PASSWORD=***
SMTP_FROM="Origami99 Leads <no-reply@origami99.com>"
LEAD_NOTIFY_TO=engage@origami99.com
```

Gmail: create an "App password" under Google account security, then use it as
`SMTP_PASSWORD` with `SMTP_HOST=smtp.gmail.com` and `SMTP_PORT=587`.

## Notes

- JWTs are stored in memory on the client (never `localStorage`) — a full page
  reload signs you out. This is intentional for a privileged admin surface.
- Public routes (`POST /leads`, `GET /services`, `GET /blogs`) do not require a
  token so the marketing site can call them anonymously.
- Rate limit on `POST /leads` is 20 submissions per IP per 10 minutes.
- Set `CORS_ORIGIN` to a comma-separated list of every site origin that will
  call this API (local dev, Lovable preview, custom domain).
