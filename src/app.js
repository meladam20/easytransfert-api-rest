/**
 * app.js
 * -------
 * Configuration de l’application Express.
 */

const express = require('express');

const app = express();

/**
 * Middleware global :
 * Permet à Express de lire le JSON envoyé par le client
 */
app.use(express.json());

/**
 * Import des routes
 */
const userRoutes = require('./routes/User.routes.js');
const transactionRoutes = require('./routes/Transaction.routes');


/**
 * Montage des routes :
 * toutes les routes users
 * commenceront par /users
 */
app.use('/users', userRoutes);
app.use('/transactions', transactionRoutes);


/**
 * Route de test temporaire
 * (juste pour vérifier que ça fonctionne)
 */
app.get('/', (req, res) => {
  res.json({ message: 'API Express fonctionnelle' });
});

/**
 * Middleware global de gestion des erreurs
 * DOIT être le dernier middleware
 */
const errorHandler = require('./middlewares/error.middleware');
app.use(errorHandler);


module.exports = app;
