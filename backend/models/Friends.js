const mongoose = require("mongoose");

const friendshipSchema = new mongoose.Schema({
  requester: { type: mongoose.Schema.Types.ObjectId, ref: "Pet", required: true }, // Quem enviou
  recipient: { type: mongoose.Schema.Types.ObjectId, ref: "Pet", required: true }, // Quem recebeu
  status: { 
    type: String, 
    enum: ["pending", "accepted", "declined"], 
    default: "pending" 
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Friendship", friendshipSchema);
