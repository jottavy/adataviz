# 🌿 Les Parcelliers

> Site vitrine dynamique pour explorer et éventuellement rejoindre ces coins de verdure parisiens.

---

## ✨ Fonctionnalités (V1)

- **Cartes dynamiques** : Liste des jardins avec détails dépliables (gestionnaire, contacts, etc.).
- **Compteur en temps réel** : Affichage dynamique du nombre de jardins récupérés en direct via l'API.

---

## 🚀 Évolutions futures (V2)

- **Filtres multi-critères** : Tri par arrondissement ou gestionnaire avec badges de sélection interactifs.
- **Vue carte interactive** : Afficher la liste des résultats sur une carte interactive.
- **Gestion de favoris** : Système de favoris pour sauvegarder des jardins préférés en local (LocalStorage) et d'une page dédiée.

---

## 🛠️ Stack technique

- **Langages** : HTML5 / CSS3 / JavaScript (Vanilla)
- **Bundler** : Vite
- **Icons & Fonts** :
  - Font Awesome 4.7 pour les icônes
  - DM Sans & DM Mono via Google Fonts

---

## 📂 Structure

- `index.html` : Structure sémantique principale de l'application (header, panneau de filtres, grille de résultats, footer).
- `main.js` : Point d'entrée de l'application (initialisation, requêtes Fetch asynchrones, gestion globale).
- `utils.js` : Fonctions utilitaires, formatage des données JSON (noms, arrondissements etc.) et fonction de création dynamique des cartes (`creerCarte`).
- `style.css` : Charte graphique, mise en page responsive.
