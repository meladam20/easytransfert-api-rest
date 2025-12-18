/**
 * user.routes.js
 * --------------
 * Ce fichier définit les routes HTTP
 * liées aux utilisateurs.
 */

const express = require('express');
const router = express.Router();

/**
 * Import du controller User
 * Le controller contient la logique HTTP.
 */
const userController = require('../controllers/user.controller');

/**
 * Route : POST /users
 * Quand un client fait une requête POST sur /users,
 * Express appelle la méthode createUser du controller.
 */
router.post('/', userController.createUser);

/**
 * Export du router
 * Il sera utilisé dans app.js
 */
module.exports = router;
