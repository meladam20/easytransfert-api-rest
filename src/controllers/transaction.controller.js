/**
 * transaction.controller.js
 * -------------------------
 * Gère les requêtes HTTP liées aux transactions.
 */

const Transaction = require('../models/Transaction.model');
const User = require('../models/User.model');

/**
 * Création d’une transaction
 * POST /transactions
 */
const createTransaction = async (req, res, next) => {
  try {
    /**
     * Données envoyées par le client
     */
    const { amount, status, user } = req.body;

    /**
     * RÈGLE MÉTIER :
     * Vérifier que l’utilisateur existe
     */
    const existingUser = await User.findById(user);

    if (!existingUser) {
      const error = new Error('Utilisateur inexistant');
      error.statusCode = 404;
      throw error;
    }

    /**
     * Création de la transaction
     */
    const transaction = await Transaction.create({
      amount,
      status,
      user,
    });

    /**
     * Réponse HTTP
     */
    res.status(201).json(transaction);
  } catch (error) {
    next(error);
  }
};

/**
 * Récupération de toutes les transactions
 * GET /transactions
 */
const getTransactions = async (req, res, next) => {
  try {
    /**
     * Récupération des transactions
     * + populate pour inclure l’utilisateur
     */
    const transactions = await Transaction.find()
      .populate('user');

    res.status(200).json(transactions);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createTransaction,
  getTransactions,
};
