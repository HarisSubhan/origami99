// Usage: node scripts/create-admin.js "Your Name" "you@example.com" "yourpassword" [role]
import bcrypt from "bcrypt";
import { q, pool } from "../src/db.js";
import { newId } from "../src/id.js";

const [, , name, email, password, role = "admin"] = process.argv;
if (!name || !email || !password) {
  console.error('Usage: node scripts/create-admin.js "Name" "email" "password" [admin|editor|viewer]');
  process.exit(1);
}

const hash = await bcrypt.hash(password, 10);
const id = newId();
await q(
  `INSERT INTO admin_users (id,name,email,password_hash,role,status)
   VALUES (:id,:name,:email,:hash,:role,'active')
   ON DUPLICATE KEY UPDATE name = :name, password_hash = :hash, role = :role, status = 'active'`,
  { id, name, email, hash, role },
);
console.log(`Admin user ready: ${email} (${role})`);
await pool.end();
