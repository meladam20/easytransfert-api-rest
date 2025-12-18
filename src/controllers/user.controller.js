/**
 * user.controller.js
 * ------------------
 * Ce controller gère les requêtes HTTP
 * liées aux utilisateurs.
 */

const User = require('../models/User.model');

/**
 * Création d’un utilisateur
 * Méthode appelée par la route POST /users
 */
const createUser = async (req, res, next) => {
  try {
    /**
     * Les données envoyées par le client
     * sont dans req.body
     */
    const { name, email, phone } = req.body;

    /**
     * Création de l’utilisateur en base
     * via le modèle Mongoose
     */
    const user = await User.create({
      name,
      email,
      phone,
    });

    /**
     * Réponse HTTP :
     * - statut 201 = créé
     * - retour de l’utilisateur créé
     */
    res.status(201).json(user);
  } catch (error) {
    /**
     * En cas d’erreur,
     * on délègue au middleware d’erreur global
     */
    next(error);
  }
};

/**
 * Export des méthodes du controller
 */
module.exports = {
  createUser,
};
