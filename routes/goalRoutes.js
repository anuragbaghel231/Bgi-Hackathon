const express = require("express");
const router = express.Router();
const Goal = require("../models/goal");
const auth = require("../middleware/authMiddleware");

// Set goal
router.post("/", auth, async (req, res) => {
  const { dailyLimit } = req.body;

  const goal = await Goal.findOneAndUpdate(
    { userId: req.user },
    { dailyLimit },
    { upsert: true, new: true }
  );

  res.json(goal);
});

// Get goal
router.get("/", auth, async (req, res) => {
  const goal = await Goal.findOne({ userId: req.user });
  res.json(goal);
});

module.exports = router;