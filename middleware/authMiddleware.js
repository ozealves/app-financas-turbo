const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  try {
    // 1. Verificar se tem token no header
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        error: 'Acesso negado. Token não fornecido.'
      });
    }

    // 2. Verificar token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 3. Buscar usuário pelo ID do token
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({
        success: false,
        error: 'Token inválido. Usuário não existe.'
      });
    }

    // 4. Adicionar usuário à request
    req.user = user;
    next();

  } catch (error) {
    return res.status(401).json({
      success: false,
      error: 'Token inválido.'
    });
  }
};

module.exports = { protect };