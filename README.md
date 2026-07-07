# Les Jardins Partagés

Site vitrine listant les jardins partagés de Paris, avec recherche, filtres et gestion de favoris.

## Fonctionnalités

- Liste des jardins avec détails dépliables (surface, année d'ouverture, gestionnaire)
- Filtres multi-critères (arrondissement, animateurs, distance) avec compteur de sélection
- Ajout de jardins en favoris
- Page dédiée "Mes jardins favoris"

## Stack technique

- HTML / CSS / JavaScript (vanilla)
- [Vite](https://vitejs.dev/) comme serveur de développement et bundler
- [Font Awesome 4.7](https://fontawesome.com/v4/) pour les icônes
- Polices [Eczar](https://fonts.google.com/specimen/Eczar) et [Work Sans](https://fonts.google.com/specimen/Work+Sans) via Google Fonts

## Lancer le projet en local

```bash
npm install
npm run dev
```

Puis ouvrir l'URL affichée dans le terminal (généralement `http://localhost:5173`).

## Structure du projet

├── index.html # Page principale : liste des jardins
├── favoris.html # Page des jardins favoris
├── src/
│ ├── main.js # Logique JS (détails dépliables, badges de filtres)
│ └── style.css # Styles du site
└── README.md
