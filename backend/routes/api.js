const express = require("express");
const router = express.Router();

// CRUD
router.get("/", (req, res) => {
    // res.send() envia o texto como resposta HTTP
    res.send("olá mundo2");
});

module.exports = router;