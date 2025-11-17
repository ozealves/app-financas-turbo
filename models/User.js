const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Nome é obrigatório'],
    trim: true,
    maxlength: [50, 'Nome muito longo']
  },
  email: {
    type: String,
    required: [true, 'Email é obrigatório'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Email inválido']
  },
  password: {
    type: String,
    required: [true, 'Senha é obrigatória'],
    minlength: [6, 'Senha deve ter no mínimo 6 caracteres'],
    select: false // Não retorna a senha nas consultas
  }
}, {
  timestamps: true
});

// 🎯 MIDDLEWARE: Criptografa senha antes de salvar
userSchema.pre('save', async function(next) {
  // Só criptografa se a senha foi modificada
  if (!this.isModified('password')) return next();
  
  // Gera o hash da senha
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// 🎯 MÉTODO: Comparar senha para login
userSchema.methods.correctPassword = async function(candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

// 🎯 MÉTODO: Mudar timestamp para formato BR
userSchema.methods.toJSON = function() {
  const user = this.toObject();
  delete user.password; // Remove senha do JSON
  return user;
};

module.exports = mongoose.model('User', userSchema);