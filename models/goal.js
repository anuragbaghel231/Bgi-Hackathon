const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  dailyLimit: Number // minutes
});

module.exports = mongoose.models.Goal || mongoose.model("Goal", goalSchema);