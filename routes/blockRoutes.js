const express = require("express");
const router = express.Router();
const BlockList = require("../models/blocklist");
const auth = require("../middleware/authMiddleware");

// Add site
router.post("/", auth, async (req, res) => {
  const { site } = req.body;

  let list = await BlockList.findOne({ userId: req.user });

  if (!list) {
    list = await BlockList.create({ userId: req.user, sites: [site] });
  } else {
    list.sites.push(site);
    await list.save();
  }

  res.json(list);
});

// Get blocklist
router.get("/", auth, async (req, res) => {
  const list = await BlockList.findOne({ userId: req.user });
  res.json(list);
});

module.exports = router;