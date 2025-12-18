# API REST Express.js + MongoDB

Mini API REST développée avec **Express.js** et **MongoDB**,
respectant une architecture claire et des bonnes pratiques
de niveau entreprise.

---

## 🎯 Fonctionnalités

- Création d’un utilisateur
- Création d’une transaction liée à un utilisateur
- Consultation de la liste des transactions
- Validation des données
- Gestion centralisée des erreurs

---

## 🧰 Stack technique

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- nodemon

---

## 📁 Architecture du projet

src/
├── config/
│ └── database.js
├── models/
│ ├── User.model.js
│ └── Transaction.model.js
├── controllers/
│ ├── user.controller.js
│ └── transaction.controller.js
├── routes/
│ ├── User.routes.js
│ └── Transaction.routes.js
├── middlewares/
│ └── error.middleware.js
├── app.js
server.js
.env


---

## ⚙️ Installation

### 1. Cloner le projet

```bash
git clone <url-du-repo>
cd easytransfert-api-rest
```

### 2. Installer les dépendances

npm install

### 3. Configurer l’environnement

Créer un fichier .env :

PORT=3000
MONGO_URI=mongodb://localhost:27017/easytransfert_api


### 4. Lancer le serveur
npm run dev

### 5.  Endpoints API
 Créer un utilisateur

POST /users

{
  "name": "Jean Dupont",
  "email": "jean@mail.com",
  "phone": "0700000000"
}

Créer une transaction

POST /transactions

{
  "amount": 15000,
  "status": "success",
  "user": "ID_UTILISATEUR"
}

Lister les transactions

GET /transactions

### 6. Gestion des erreurs

Validation automatique via Mongoose

Email utilisateur unique

Impossible de créer une transaction sans utilisateur existant

Middleware global de gestion des erreurs

### 7. Améliorations possibles

Authentification JWT

Pagination des transactions

Tests unitaires

Dockerisation

Rôles et permissions