petmatch-app/
├── backend/
│   ├── node_modules/       # Dependências do Node (gerada após 'npm install')
│   ├── .env                # Variáveis de ambiente (ex: string de conexão com o Mongo, porta do servidor)
│   ├── .gitignore          # Arquivos e pastas a serem ignorados pelo Git
│   ├── package.json        # Metadados e dependências do projeto Node
│   ├── server.js           # Ponto de entrada do aplicativo (configurações iniciais e start do servidor)
│   ├── config/             # Configurações do banco de dados, servidor, etc.
│   │   └── db.js           # Configuração de conexão com o MongoDB
│   ├── models/             # Define a estrutura de dados (Schemas do Mongoose)
│   │   ├── Pet.js          # Modelo para informações de Pets
│   │   ├── User.js         # Modelo para informações de Usuários
│   │   └── Match.js        # Modelo para os encontros/matches
│   ├── controllers/        # Contém a lógica de negócios para as rotas (o que fazer com a requisição)
│   │   ├── petController.js
│   │   ├── userController.js
│   │   └── matchController.js
│   ├── routes/             # Define as rotas da API e as conecta aos Controllers
│   │   ├── api.js          # Arquivo principal de rotas (importa as demais)
│   │   ├── petRoutes.js
│   │   ├── userRoutes.js
│   │   └── matchRoutes.js
│   ├── middlewares/        # Funções que executam antes ou depois do Controller (ex: autenticação)
│   │   └── authMiddleware.js
│   └── utils/              # Funções utilitárias (helpers, formatação, etc.)
│
└── frontend/
    ├── css/
    │   ├── style.css       # Estilos globais
    │   └── components.css  # Estilos específicos de componentes (opcional)
    ├── js/
    │   ├── app.js          # Lógica principal do Frontend (inicialização, roteamento simples)
    │   ├── api.js          # Funções para interagir com o Back-end (fetch/axios)
    │   ├── ui.js           # Funções para manipular o DOM e renderizar a UI
    │   └── pages/          # Lógica específica para cada página
    │       ├── home.js
    │       ├── profile.js
    │       └── matches.js
    ├── img/                # Imagens do projeto
    ├── index.html          # Página inicial/Login
    ├── dashboard.html      # Tela principal do aplicativo
    └── profile.html        # Tela de perfil do Pet/Usuário