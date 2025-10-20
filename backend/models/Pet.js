const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  breed: String,
  bio: String,
  gender: { type: String, enum: ["macho", "fêmea"] },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  avatarUrl: String, // Foto principal
  gallery: [{ type: String }], // URLs de fotos adicionais
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "Pet" }],
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  createdAt: { type: Date, default: Date.now }
});
