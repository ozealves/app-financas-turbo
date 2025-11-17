# 💰 API Finanças Turbo - Sistema de Gestão Financeira

![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![Express](https://img.shields.io/badge/Express-4.x-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)
![JWT](https://img.shields.io/badge/JWT-Auth-orange)

## 🚀 Sobre o Projeto

Sistema completo de gestão financeira pessoal com autenticação segura, desenvolvido como parte do programa **Mentor Turbo** para aprendizado acelerado em desenvolvimento full-stack.

### 📋 Funcionalidades Implementadas

- ✅ **Autenticação JWT** - Registro e login seguro
- ✅ **Gestão de Usuários** - CRUD completo com validações
- ✅ **Transações Financeiras** - Entradas e saídas
- ✅ **Banco de Dados Cloud** - MongoDB Atlas
- ✅ **API REST** - Endpoints organizados e documentados
- ✅ **Segurança** - Senhas criptografadas com bcrypt

## 🛠️ Tecnologias Utilizadas

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **MongoDB Atlas** - Banco de dados na nuvem
- **Mongoose** - ODM para MongoDB
- **JWT** - Autenticação por tokens
- **Bcryptjs** - Criptografia de senhas
- **CORS** - Controle de acesso entre origens

### Ferramentas de Desenvolvimento
- **Thunder Client** - Testes de API
- **Nodemon** - Reinício automático do servidor
- **Dotenv** - Variáveis de ambiente

## 📁 Estrutura do Projeto

##app-financas-turbo/
├── 📄 server.js # Servidor principal
├── 📁 models/ # Modelos de dados
│ ├── User.js # Modelo de usuário
│ └── Transaction.js # Modelo de transação
├── 📁 routes/ # Rotas da API
│ └── authRoutes.js # Rotas de autenticação
├── 📁 middleware/ # Middlewares
│ └── authMiddleware.js # Proteção de rotas
├── 📄 .env # Variáveis de ambiente
└── 📄 package.json # Dependências do projeto

text

## 🔌 Instalação e Configuração

### Pré-requisitos
- Node.js 18+
- MongoDB Atlas (conta gratuita)
- Git

### Passos para Executar

1. **Clone o repositório**
```bash
git clone [url-do-repositorio]
cd app-financas-turbo
Instale as dependências

bash
npm install
Configure as variáveis de ambiente

bash
cp .env.example .env
# Edite o .env com suas configurações
Execute o servidor

bash
npm run dev
📡 Endpoints da API
Autenticação
🔐 Registrar Usuário
http
POST /api/auth/register
Content-Type: application/json

{
  "name": "Seu Nome",
  "email": "email@teste.com",
  "password": "123456"
}
🔑 Login
http
POST /api/auth/login
Content-Type: application/json

{
  "email": "email@teste.com",
  "password": "123456"
}
❤️ Health Check
http
GET /api/health
🗄️ Modelos de Dados
Usuário (User)
javascript
{
  name: String,
  email: String (único),
  password: String (criptografada),
  createdAt: Date,
  updatedAt: Date
}
Transação (Transaction)
javascript
{
  description: String,
  amount: Number,
  type: String ['income', 'expense'],
  category: String,
  date: Date,
  user: ObjectId (referência ao User)
}
🔒 Segurança
Senhas: Criptografadas com bcrypt (12 rounds)

Autenticação: JWT tokens com expiração

Validações: Email único, senha mínima 6 caracteres

Proteção: Middleware em rotas sensíveis

🚀 Próximas Etapas
🔒 Implementar middleware de proteção nas rotas

💰 Associar transações ao usuário logado

📱 Desenvolver frontend React Native

☁️ Deploy em produção

📊 Relatórios e estatísticas

👨‍💻 Desenvolvimento
Este projeto foi desenvolvido como parte do programa Mentor Turbo - metodologia de aprendizado acelerado em desenvolvimento full-stack.

Estudante: Ozeias Alves
Mentor: Assistente Turbo
Data: Novembro 2024

📄 Licença
Este projeto é para fins educacionais.

text

## 🎯 **PASSO 3: CRIAR .env.example**
```bash
touch .env.example
Conteúdo do .env.example:

env
# Configurações da API
PORT=5000
NODE_ENV=development

# MongoDB Atlas - Substitua com suas credenciais
MONGODB_URI=mongodb+srv://usuario:senha@cluster0.xxxxx.mongodb.net/nome-do-banco?retryWrites=true&w=majority

# JWT Configuration
JWT_SECRET=sua_chave_secreta_super_segura_aqui
JWT_EXPIRES_IN=30d
📋 PASSO 4: ATUALIZAR package.json
Adicione esta seção:

json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "docs": "echo '📚 Documentação disponível em README.md'"
  },
  "keywords": [
    "nodejs",
    "express",
    "mongodb",
    "jwt",
    "authentication",
    "finance",
    "api",
    "mentor-turbo"
  ],
  "author": "Ozeias Alves",
  "license": "MIT"
}
🚀 PRÓXIMOS PASSOS DA DOCUMENTAÇÃO:
✅ README.md criado

✅ .env.example criado

🔜 Comentar o código (boas práticas)

🔜 Criar CHANGELOG.md (histórico de mudanças)

🔜 Documentar endpoints com exemplos