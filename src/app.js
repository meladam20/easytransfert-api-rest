
/**
 * app.js
 * -------
 * Configuration de l’application Express.
 */
const cors = require('cors');


const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log("🔥 INCOMING:", req.method, req.url);
  next();
});


/**
 * Middleware global :
 * Permet à Express de lire le JSON envoyé par le client
 */
app.use(express.json());

/**
 * Import des routes
 */
const userRoutes = require('./routes/user.routes');
const transactionRoutes = require('./routes/transaction.routes');


app.use(
  cors({
    origin: "http://localhost:5173",
  })
);


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

app.use((req, res, next) => {
  console.log("REQ:", req.method, req.url);
  next();
});


/**
 * Middleware global de gestion des erreurs
 * DOIT être le dernier middleware
 */
const errorHandler = require('./middlewares/error.middleware');
app.use(errorHandler);


module.exports = app;
