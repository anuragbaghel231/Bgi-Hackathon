const express = require("express");
const router = express.Router();
const Usage = require("../models/usage");
const auth = require("../middleware/authMiddleware");

// Save usage
router.post("/", auth, async (req, res) => {
  const { url, timeSpent } = req.body;

  const usage = await Usage.create({
    userId: req.user,
    url,
    timeSpent
  });

  res.json(usage);
});

// Get all usage
router.get("/", auth, async (req, res) => {
  const data = await Usage.find({ userId: req.user });
  res.json(data);
});

module.exports = router;