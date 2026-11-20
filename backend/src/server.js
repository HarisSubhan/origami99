import express from "express";
import cors from "cors";
import path from "node:path";
import "dotenv/config";

import { mountAuth } from "./auth.js";
import leadsRouter from "./routes/leads.js";
import usersRouter from "./routes/users.js";
import { servicesRouter, blogsRouter, portfolioRouter, pagesRouter } from "./routes/generic.js";
import uploadsRouter from "./uploads.js";
import analyticsRouter from "./analytics.js";

const app = express();
const PORT = Number(process.env.PORT || 3001);

const allowedOrigins = (process.env.CORS_ORIGIN || "http://localhost:5173,http://localhost:8080")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: (origin, cb) => {
      // Allow same-origin/curl (no Origin header) and any listed origin.
      if (!origin) return cb(null, true);
      if (allowedOrigins.includes("*") || allowedOrigins.includes(origin)) return cb(null, true);
      cb(new Error(`CORS blocked: ${origin}`));
    },
    credentials: false,
  }),
);
app.use(express.json({ limit: "1mb" }));
app.use("/uploads", express.static(path.resolve("uploads")));

app.get("/health", (_req, res) => res.json({ ok: true }));

mountAuth(app);
app.use("/leads", leadsRouter);
app.use("/users", usersRouter);
app.use("/services", servicesRouter);
app.use("/blogs", blogsRouter);
app.use("/portfolio", portfolioRouter);
app.use("/pages", pagesRouter);
app.use("/uploads", uploadsRouter);
app.use("/analytics", analyticsRouter);

app.use((err, _req, res, _next) => {
  console.error("[api] error:", err);
  res.status(500).json({ error: err.message || "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`Origami99 API listening on http://localhost:${PORT}`);
  console.log(`CORS allowed origins: ${allowedOrigins.join(", ")}`);
});
