const express = require("express");
const path = require("path");
require('dotenv').config();
const dataBaseConnect = require("./db");

const petRoutes = require("./routes/api");

const app = express()
app.use(express.json());
const PORT = 3000;
dataBaseConnect();

app.use(express.static(path.join(__dirname, "frontend")));

app.use("/api/pet", petRoutes);


app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})
