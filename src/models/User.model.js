/**
 * User.model.js
 * -------------
 * Ce fichier définit le modèle "User".
 * Un modèle représente une collection MongoDB
 * + les règles qui s’appliquent aux documents.
 */

const mongoose = require('mongoose');

/**
 * Définition du schéma utilisateur
 * Le schéma décrit la STRUCTURE des données.
 */
const userSchema = new mongoose.Schema(
  {
    /**
     * Nom de l’utilisateur
     * - type String
     * - obligatoire
     */
    name: {
      type: String,
      required: [true, 'Le nom est obligatoire'],
      trim: true, // supprime les espaces inutiles
    },

    /**
     * Email de l’utilisateur
     * - type String
     * - obligatoire
     * - unique (règle métier)
     */
    email: {
      type: String,
      required: [true, 'Email obligatoire'],
      unique: true, // empêche les doublons
      lowercase: true, // force les minuscules
      trim: true,
    },

    /**
     * Numéro de téléphone
     * - type String
     * (les téléphones ne sont PAS des nombres)
     */
    phone: {
      type: String,
      required: [true, 'Téléphone obligatoire'],
      trim: true,
    },
  },
  {
    /**
     * timestamps ajoute automatiquement :
     * - createdAt
     * - updatedAt
     */
    timestamps: true,
  }
);

/**
 * Export du modèle User
 * - 'User' = nom du modèle
 * - mongoose créera la collection "users"
 */
module.exports = mongoose.model('User', userSchema);
