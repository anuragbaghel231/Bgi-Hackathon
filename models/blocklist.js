const mongoose = require("mongoose");

const blockSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  sites: [String]
});

module.exports = mongoose.models.BlockList || mongoose.model("BlockList", blockSchema);