const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
  post: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
  pet: { type: mongoose.Schema.Types.ObjectId, ref: "Pet", required: true }, // Quem curtiu
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Like", likeSchema);
