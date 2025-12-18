/**
 * server.js
 * ----------
 * Point d’entrée de l’application.
 * Démarre le serveur HTTP.
 */

require('dotenv').config();
// Charge les variables du fichier .env

const app = require('./src/app');
// Importe l’application Express configurée
const connectDatabase = require('./src/config/database');
// ↑ on importe la fonction de connexion à la base de données

// Connexion à la base de données avant de démarrer le serveur
connectDatabase();

const PORT = process.env.PORT || 3000;
// Récupère le port depuis .env

/**
 * Démarrage du serveur HTTP
 */
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur le port ${PORT}`);
});
