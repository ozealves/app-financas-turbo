const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  description: {
    type: String,
    required: [true, 'Descrição é obrigatória'],
    trim: true,
    maxlength: [100, 'Descrição muito longa']
  },
  amount: {
    type: Number,
    required: [true, 'Valor é obrigatório'],
    min: [0.01, 'Valor deve ser maior que zero']
  },
  type: {
    type: String,
    enum: {
      values: ['income', 'expense'],
      message: 'Tipo deve ser income ou expense'
    },
    required: true
  },
  category: {
    type: String,
    default: 'Outros'
  },
  date: {
    type: Date,
    default: Date.now
  },
  // 🎯 CAMPO ATUALIZADO: Agora referencia o User
  user: {
    type: mongoose.Schema.Types.ObjectId, // ID do MongoDB
    ref: 'User', // Referência ao modelo User que criamos
    required: [true, 'Usuário é obrigatório']
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Transaction', transactionSchema);