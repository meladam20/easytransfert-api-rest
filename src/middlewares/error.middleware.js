/**
 * error.middleware.js
 * -------------------
 * Middleware global de gestion des erreurs.
 * TOUTES les erreurs de l’application passent ici.
 */

const errorHandler = (err, req, res, next) => {
  /**
   * Valeurs par défaut
   */
  let statusCode = 500;
  let message = 'Erreur interne du serveur';

  /**
   * CAS 1 — Erreur Mongoose : validation
   * Exemple : champ requis manquant
   */
  if (err.name === 'ValidationError') {
    statusCode = 400;
    message = Object.values(err.errors)
      .map(e => e.message)
      .join(', ');
  }

  /**
   * CAS 2 — Erreur Mongoose : duplication (email unique)
   */
  if (err.code === 11000) {
    statusCode = 409;
    message = 'Un utilisateur avec cet email existe déjà';
  }

  /**
   * CAS 3 — Erreur métier personnalisée
   * (qu’on ajoutera plus tard si besoin)
   */
  if (err.statusCode) {
    statusCode = err.statusCode;
    message = err.message;
  }

  /**
   * Réponse finale envoyée au client
   */
  res.status(statusCode).json({
    success: false,
    message,
  });
};

module.exports = errorHandler;
