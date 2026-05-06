

const mongoose = require("mongoose");

const usageSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  url: String,
  timeSpent: Number, // seconds
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Usage", usageSchema);