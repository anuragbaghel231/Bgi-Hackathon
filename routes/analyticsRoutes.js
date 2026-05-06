const express = require("express");
const router = express.Router();
const Usage = require("../models/usage");
const auth = require("../middleware/authMiddleware");

// Get analytics
router.get("/", auth, async (req, res) => {
  const data = await Usage.find({ userId: req.user });

  let total = 0;
  let siteMap = {};

  data.forEach(d => {
    total += d.timeSpent;
    siteMap[d.url] = (siteMap[d.url] || 0) + d.timeSpent;
  });

  res.json({
    totalTime: total,
    siteBreakdown: siteMap
  });
});

module.exports = router;