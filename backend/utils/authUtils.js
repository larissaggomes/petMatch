// authUtils.js
const jwt = require('jsonwebtoken');

/**
 * @function generateToken
 * @description Gera um JSON Web Token (JWT) assinado contendo o ID do usuário.
 * @param {string} id - O ID do usuário (geralmente user._id do MongoDB).
 * @returns {string} O token JWT gerado.
 */
const generateToken = (id) => {
    // 1. O Payload (Dados internos do Token)
    // O ID é o dado essencial que identifica o usuário.
    const payload = { 
        id: id 
    }; 

    // 2. A Chave Secreta
    // Obtida do processo de variáveis de ambiente (.env).
    const secret = process.env.JWT_SECRET;
    
    if (!secret) {
        // É crucial que esta chave esteja definida.
        throw new Error("JWT_SECRET não está definido nas variáveis de ambiente. Verifique seu arquivo .env.");
    }

    // 3. As Opções (Tempo de Expiração)
    const options = {
        // Define o tempo de vida do token.
        // O valor padrão de fallback é '1d' (1 dia).
        expiresIn: process.env.JWT_EXPIRES_IN || '1d', 
    };

    // 4. Criação e Assinatura do Token
    // jwt.sign(payload, secret, options)
    return jwt.sign(payload, secret, options);
};

// Exportamos a função para ser usada nos controladores (Ex: login)
module.exports = {
    generateToken
};

// --- Configuração Necessária ---
// Certifique-se de ter estas variáveis no seu arquivo .env:
/*
JWT_SECRET=UMA_CHAVE_MUITO_SECRETA_E_LONGA
JWT_EXPIRES_IN=1d 
*/