const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// 🎯 IMPORTAR ROTAS
const authRoutes = require('./routes/authRoutes');
// const transactionRoutes = require('./routes/transactionRoutes'); // Vamos criar depois

const app = express();

// 🎯 MIDDLEWARES
app.use(cors());
app.use(express.json());

// 🎯 CONEXÃO MONGODB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB Atlas conectado!');
  } catch (error) {
    console.log('❌ Erro MongoDB:', error.message);
  }
};
connectDB();

// 🎯 ROTAS
app.use('/api/auth', authRoutes);
// app.use('/api/transactions', transactionRoutes); // Vamos criar depois

// 🎯 ROTA DE SAÚDE
app.get('/api/health', (req, res) => {
  res.json({
    server: '✅ Online',
    database: mongoose.connection.readyState === 1 ? '✅ Online' : '❌ Offline',
    timestamp: new Date().toISOString(),
    status: 'healthy'
  });
});

// 🎯 ROTA PRINCIPAL
app.get('/', (req, res) => {
  res.json({ 
    message: '💰 API Finanças Turbo - SISTEMA DE AUTENTICAÇÃO ATIVO!', 
    version: '2.0.0',
    features: [
      '🔐 Registro e Login de usuários',
      '🛡️ Autenticação JWT', 
      '💰 CRUD de transações (em breve)',
      '📊 MongoDB Atlas'
    ]
  });
});

// 🎯 INICIAR SERVIDOR
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`🔐 Auth: http://localhost:${PORT}/api/auth`);
  console.log(`❤️  Health: http://localhost:${PORT}/api/health`);
});