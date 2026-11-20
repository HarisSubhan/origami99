import { Router } from "express";
import { q } from "./db.js";
import { requireAuth } from "./auth.js";

const router = Router();
router.use(requireAuth);

router.get("/summary", async (_req, res) => {
  const [{ leads30d = 0 } = {}] = await q(
    "SELECT COUNT(*) AS leads30d FROM leads WHERE created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY)",
  );
  const series = await q(
    `SELECT DATE(created_at) AS date, COUNT(*) AS leads
     FROM leads
     WHERE created_at >= DATE_SUB(CURDATE(), INTERVAL 29 DAY)
     GROUP BY DATE(created_at)
     ORDER BY date ASC`,
  );
  const topSources = await q(
    `SELECT COALESCE(source,'Direct') AS source, COUNT(*) AS visits
     FROM leads WHERE created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY)
     GROUP BY source ORDER BY visits DESC LIMIT 10`,
  );

  res.json({
    visitors30d: 0, // wire your analytics source here
    pageviews30d: 0,
    leads30d: Number(leads30d),
    conversionRate: 0,
    series: series.map((r) => ({ date: r.date, visitors: 0, leads: Number(r.leads) })),
    topPages: [],
    topSources: topSources.map((r) => ({ source: r.source, visits: Number(r.visits) })),
  });
});

export default router;
