/**
 * transaction.routes.js
 * ---------------------
 * Routes HTTP liées aux transactions.
 */

const express = require('express');
const router = express.Router();

/**
 * Import du controller Transaction
 */
const transactionController = require('../controllers/transaction.controller');

/**
 * POST /transactions
 * → Créer une transaction
 */
router.post('/', transactionController.createTransaction);

/**
 * GET /transactions
 * → Lister toutes les transactions
 */
router.get('/', transactionController.getTransactions);

/**
 * Export du router
 */
module.exports = router;
