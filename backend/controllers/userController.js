// 1. Importar o modelo de Usuário
const User = require('../models/User'); 

// Você precisará desta função para lidar com a criação do usuário
const registerUser = async (req, res) => {
    // 2. Extrair dados do corpo da requisição
    const { 
        name, 
        email, 
        password // O campo do frontend deve se chamar 'password'
    } = req.body;

    // 3. Validação básica (opcional, mas recomendado)
    if (!name || !email || !password) {
        return res.status(400).json({ 
            message: "Por favor, preencha todos os campos obrigatórios: nome, email e senha." 
        });
    }

    try {
        // 4. Verificar se o usuário já existe
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            // Se o email já estiver em uso, retorna um erro 409 Conflict
            return res.status(409).json({ 
                message: "O email fornecido já está registrado." 
            });
        }

        // 5. Criar uma nova instância do usuário
        // OBS: Você deve passar a senha como 'passwordHash' 
        // para que o hook 'pre("save")' funcione.
        const newUser = new User({
            name,
            email,
            // O hook 'pre' em User.js irá criptografar este valor
            passwordHash: password, 
            // Outros campos opcionais podem ser adicionados aqui:
            phone: req.body.phone,
            location: req.body.location
        });

        // 6. Salvar o novo usuário no banco de dados
        // O hook 'pre("save")' será executado aqui para criptografar a senha!
        const savedUser = await newUser.save();
        
        // 7. Retornar uma resposta de sucesso
        // É importante não retornar a 'passwordHash' no JSON de resposta por segurança.
        const userResponse = {
            id: savedUser._id,
            name: savedUser.name,
            email: savedUser.email,
            createdAt: savedUser.createdAt,
            // Você pode adicionar mais campos aqui, exceto a senha
        };

        return res.status(201).json({
            message: "Usuário registrado com sucesso!",
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