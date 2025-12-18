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
 * GET /users
 * Récupère la liste des utilisateurs
 */
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    /**
     * Normalisation de la réponse API
     * - id au lieu de _id
     * - pas de données sensibles
     */
    const formattedUsers = users.map((user) => ({
      id: user._id,
      name: user.name,
      email: user.email,
    }));

    res.status(200).json(formattedUsers);
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la récupération des utilisateurs",
    });
  }
};


/**
 * Export des méthodes du controller
 */
module.exports = {
  createUser,
  getAllUsers,
};
