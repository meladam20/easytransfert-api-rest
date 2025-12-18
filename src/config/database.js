/**
 * database.js
 * ------------
 * Gère la connexion à MongoDB.
 * Ce fichier n’a QU’UNE responsabilité :
 * établir la connexion à la base de données.
 */

const mongoose = require('mongoose');

/**
 * Fonction de connexion à MongoDB
 */
const connectDatabase = async () => {
  try {
    /**
     * Connexion à MongoDB
     * - process.env.MONGO_URI vient du fichier .env
     * - useNewUrlParser / useUnifiedTopology :
     *   options recommandées par MongoDB
     */
    await mongoose.connect(process.env.MONGO_URI);

    console.log('✅ MongoDB connecté avec succès');
  } catch (error) {
    /**
     * Si la connexion échoue :
     * - on affiche l’erreur
     * - on arrête l’application
     * (une API sans base ne sert à rien)
     */
    console.error('❌ Erreur de connexion MongoDB', error);
    process.exit(1);
  }
};

module.exports = connectDatabase;
