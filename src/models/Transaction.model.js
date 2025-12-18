/**
 * Transaction.model.js
 * --------------------
 * Modèle représentant une transaction financière.
 */

const mongoose = require('mongoose');

/**
 * Schéma Transaction
 */
const transactionSchema = new mongoose.Schema(
  {
    /**
     * Montant de la transaction
     * - Number
     * - obligatoire
     */
    amount: {
      type: Number,
      required: [true, 'Le montant est obligatoire'],
    },

    /**
     * Statut de la transaction
     * - valeurs limitées (règle métier)
     */
    status: {
      type: String,
      enum: ['pending', 'success', 'failed'],
      default: 'pending',
    },

    /**
     * Date de la transaction
     * - par défaut : maintenant
     */
    date: {
      type: Date,
      default: Date.now,
    },

    /**
     * Référence vers l’utilisateur
     * - ObjectId MongoDB
     * - ref: 'User' → lien vers le modèle User
     */
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Utilisateur requis'],
    },
  },
  {
    timestamps: true,
  }
);

/**
 * Export du modèle Transaction
 * → collection "transactions"
 */
module.exports = mongoose.model('Transaction', transactionSchema);
