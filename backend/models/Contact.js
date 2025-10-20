const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  fromPet: { type: mongoose.Schema.Types.ObjectId, ref: "Pet", required: true },
  toPet: { type: mongoose.Schema.Types.ObjectId, ref: "Pet", required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Contact", contactSchema);
