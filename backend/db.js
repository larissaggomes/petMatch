const mongoose = require('mongoose');
require('dotenv').config();

// Substitua pela sua string de conexão real
const DB_URL = process.env.DATABASE_URL;
console.log(`URI de Conexão sendo usada: ${DB_URL}`);

async function connectDB() {
  try {
    // O método 'connect' do Mongoose retorna uma Promise, por isso usamos 'await'
    await mongoose.connect(DB_URL);
    
    console.log("Conexão com o MongoDB estabelecida com sucesso!");
    
  } catch (error) {
    console.error("ERRO ao conectar com o MongoDB:", error);
    // Garante que o processo seja encerrado se a conexão falhar
    process.exit(1); 
  }
}

// Para usar a função
module.exports = connectDB;