import { Router } from "express";
import multer from "multer";
import path from "node:path";
import fs from "node:fs";
import { newId } from "./id.js";
import { q } from "./db.js";
import { requireAuth, requireRole } from "./auth.js";

const UPLOAD_DIR = path.resolve("uploads");
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, UPLOAD_DIR),
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase().slice(0, 8);
    cb(null, `${Date.now()}-${newId()}${ext}`);
  },
});
const upload = multer({ storage, limits: { fileSize: 8 * 1024 * 1024 } });

const router = Router();
router.use(requireAuth, requireRole("admin", "editor"));

router.post("/", upload.single("file"), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file" });
  const url = `/uploads/${req.file.filename}`;
  const id = newId();
  await q(
    "INSERT INTO uploads (id, url, mime, size_bytes) VALUES (:id,:url,:mime,:size)",
    { id, url, mime: req.file.mimetype, size: req.file.size },
  );
  res.status(201).json({ url });
});

export default router;
