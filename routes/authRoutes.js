const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// 🎯 FUNÇÃO: Gerar token JWT
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

// 🔐 ROTA: Registrar novo usuário
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 1. Verificar se usuário já existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        error: 'Usuário já existe com este email'
      });
    }

    // 2. Criar novo usuário
    const newUser = await User.create({
      name,
      email,
      password
    });

    // 3. Gerar token JWT
    const token = signToken(newUser._id);

    // 4. Retornar resposta
    res.status(201).json({
      success: true,
      token,
      data: {
        user: newUser
      },
      message: '🎉 Usuário criado com sucesso!'
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
});

// 🔑 ROTA: Login de usuário
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Verificar se email e senha existem
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        error: 'Email e senha são obrigatórios'
      });
    }

    // 2. Buscar usuário (incluindo a senha)
    const user = await User.findOne({ email }).select('+password');
    
    // 3. Verificar se usuário existe e senha está correta
    if (!user || !(await user.correctPassword(password, user.password))) {
      return res.status(401).json({
        success: false,
        error: 'Email ou senha incorretos'
      });
    }

    // 4. Gerar token JWT
    const token = signToken(user._id);

    // 5. Retornar resposta
    res.json({
      success: true,
      token,
      data: {
        user
      },
      message: '🔑 Login realizado com sucesso!'
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
});

module.exports = router;