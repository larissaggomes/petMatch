// controllers/userController.js (ou authController.js)

// 1. Importar o modelo de Usuário
const User = require('../models/User'); 

// 2. Importar a função de geração de Token
const { generateToken } = require('../utils/authUtils'); // <-- IMPORTADO AQUI!

const registerUser = async (req, res) => {
    // 3. Extrair dados do corpo da requisição
    const { 
        name, 
        email, 
        password // O campo do frontend deve se chamar 'password'
    } = req.body;

    // 4. Validação básica (opcional, mas recomendado)
    if (!name || !email || !password) {
        return res.status(400).json({ 
            message: "Por favor, preencha todos os campos obrigatórios: nome, email e senha." 
        });
    }

    try {
        // 5. Verificar se o usuário já existe
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            // Se o email já estiver em uso, retorna um erro 409 Conflict
            return res.status(409).json({ 
                message: "O email fornecido já está registrado." 
            });
        }

        // 6. Criar uma nova instância do usuário
        const newUser = new User({
            name,
            email,
            // O hook 'pre' em User.js irá criptografar este valor
            passwordHash: password, 
            phone: req.body.phone,
            location: req.body.location
        });

        // 7. Salvar o novo usuário no banco de dados
        const savedUser = await newUser.save();
        
        // 8. 🔑 GERAR O TOKEN DE AUTENTICAÇÃO
        // O usuário é automaticamente logado após o registro.
        const token = generateToken(savedUser._id);
        
        // 9. Retornar uma resposta de sucesso (incluindo o token)
        const userResponse = {
            id: savedUser._id,
            name: savedUser.name,
            email: savedUser.email,
            createdAt: savedUser.createdAt,
            // Inclua o token na resposta
            token: token, // <-- TOKEN ADICIONADO AQUI!
        };

        return res.status(201).json({
            message: "Usuário registrado e logado com sucesso!",
            user: userResponse
        });

    } catch (error) {
        console.error("Erro ao registrar o usuário:", error);
        return res.status(500).json({ 
            message: "Erro interno do servidor ao tentar registrar o usuário.",
            error: error.message
        });
    }
};

// Exportar a função para ser usada nas rotas
module.exports = {
    registerUser,
    // (outras funções de login, update, delete...)
};