const express = require('express');
const app = express();

const users = [
  { username: 'Utilisateur 1', password: 'secret1' },
  { username: 'Utilisateur 2', password: 'secret2' },
  { username: 'admin', password: 'admin123' }
];

app.use(express.urlencoded({ extended: true }));

// 🌐 Page d'accueil avec lien vers login
app.get('/', (req, res) => {
  res.send(`
    <h1>Bienvenue sur Propelize</h1>
    <p>Veuillez vous <a href="/login">connecter</a> pour accéder au système.</p>
  `);
});

// 🔐 Interface de connexion
app.get('/login', (req, res) => {
  res.send(`
    <style>
      body {
        background: #f0f2f5;
        font-family: Arial;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 60px;
      }
      h2 { color: #333; margin-bottom: 20px; }
      form {
        display: flex;
        flex-direction: column;
        width: 300px;
        gap: 12px;
      }
      input {
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
      }
      button {
        padding: 10px;
        background: #007bff;
        color: white;
        font-weight: bold;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
      button:hover {
        background: #0056b3;
      }
    </style>
    <h2>🔐 Connexion</h2>
    <form method="POST" action="/vehicles">
      <input name="username" placeholder="Nom d'utilisateur" required />
      <input name="password" placeholder="Mot de passe" required />
      <button type="submit">Connexion</button>
    </form>
  `);
});

// ✅ Vérification des identifiants
app.post('/vehicles', (req, res) => {
  const { username, password } = req.body;
  const utilisateurValide = users.find(u => u.username === username && u.password === password);

  if (utilisateurValide) {
    res.redirect(`/vehicles?username=${username}`);
  } else {
    res.send(`
      <h2>Échec de connexion ❌</h2>
      <p>Identifiants invalides. Veuillez réessayer.</p>
      <a href="/login">Retour</a>
    `);
  }
});

// 🚗 Tableau de bord des véhicules
app.get('/vehicles', (req, res) => {
  const username = req.query.username || 'inconnu';
  res.send(`
    <style>
      body {
        background: #fff;
        font-family: sans-serif;
        text-align: center;
        padding: 60px;
      }
      h1 { color: #333; margin-bottom: 10px; }
      h2 { margin-top: 30px; }
      ul {
        list-style: none;
        padding: 0;
        margin-top: 20px;
      }
      li {
        background: #e6f0ff;
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 6px;
        font-weight: bold;
      }
    </style>
    <h1>🚗 Bienvenue ${username}</h1>
    <h2>Gestion des véhicules</h2>
    <ul>
      <li>Véhicule A</li>
      <li>Véhicule B</li>
    </ul>
  `);
});

// 👤 Page de gestion des utilisateurs
app.get('/users', (req, res) => {
  const userList = users.map(u =>
    `<tr><td>${u.username}</td><td>${u.password}</td></tr>`
  ).join('');
  res.send(`
    <style>
      body {
        font-family: Arial;
        background: #fafafa;
        text-align: center;
        padding: 60px;
      }
      h2 { margin-bottom: 20px; }
      form {
        margin-bottom: 30px;
        display: inline-block;
        text-align: left;
      }
      input {
        margin: 5px 0;
        padding: 8px;
        width: 200px;
        border-radius: 5px;
        border: 1px solid #ccc;
      }
      button {
        padding: 10px;
        background: #28a745;
        color: white;
        border: none;
        border-radius: 5px;
        font-weight: bold;
        cursor: pointer;
        margin-top: 10px;
      }
      button:hover {
        background: #218838;
      }
      table {
        margin: auto;
        border-collapse: collapse;
        width: 60%;
      }
      td, th {
        padding: 10px;
        border: 1px solid #ccc;
      }
      th {
        background: #007bff;
        color: white;
      }
    </style>
    <h2>👤 Utilisateurs</h2>
    <form method="POST" action="/users">
      <div><input name="username" placeholder="Nom" required /></div>
      <div><input name="password" placeholder="Mot de passe" required /></div>
      <button type="submit">Ajouter</button>
    </form>
    <table>
      <tr><th>Nom</th><th>Mot de passe</th></tr>
      ${userList}
    </table>
  `);
});

// ➕ Ajout d’un utilisateur
app.post('/users', (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    users.push({ username, password });
  }
  res.redirect('/users');
});

// 🚀 Démarrage du serveur
app.listen(3000, () => {
  console.log('🚀 Serveur Propelize actif sur http://localhost:3000');
});
