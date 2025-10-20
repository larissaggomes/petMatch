const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },              // Nome do dono
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },      // Senha criptografada
  phone: String,
  location: String,
  pets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Pet" }], // Pets do usuário
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", userSchema);
