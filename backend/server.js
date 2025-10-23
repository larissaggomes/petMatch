const express = require("express");
const path = require("path");

const petRoutes = require("./routes/api");

const app = express()
const PORT = 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, "frontend")));

app.use("/api/pet", petRoutes);

app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})

//\ bca66493ac1ec56b2a41037c3e367727807e1305c9d55fa99244b1051637554e