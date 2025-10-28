const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController'); // Ajuste o caminho

// Rota para o registro de novos usuários
router.post('/register', userController.registerUser);

// CRUD
router.get("/", (req, res) => {
    // res.send() envia o texto como resposta HTTP
    res.send("olá mundo2");
});

module.exports = router;