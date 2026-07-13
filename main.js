// Fetch + manipulation du DOM

// Imports
// import './style.css';
import { texteCompteur, creerCarte } from './utils.js'; 

// Fonction d'affichage du texte compteur
const afficherTexteCompteur = (combienAffiches, total) => {
  const elementCompteur = document.querySelector('.results-count');
  
  elementCompteur.textContent = texteCompteur(combienAffiches, total);
  // console.log(`Texte compteur affiché : ${elementCompteur.textContent}`);
};

// Fonction pour charger les données depuis l'API et créer les cartes

const chargerDonnees = async () => {
  try {
    const data = await fetch('https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/jardins-partages/records?limit=20');
    if (!data.ok) throw new Error(`Le serveur de Paris a répondu avec un code ${data.status}`); // aide de l'IA pour le throw, veut dire "on saute tout le try et on va direct dans le catch" - gère le cas d'erreurs connues (404 )
    const response = await data.json(); // Je transforme ensuite la réponse JSON en objet JavaScript
    // console.table(response.results);
    
    // Charge les données du compteur dans le DOM
    afficherTexteCompteur(response.results.length, response.total_count); // combienAffiches = response.results.length, total = response.total_count

    // Crée les cartes pour chaque jardin
    const listeCartes = response.results; 
    listeCartes.forEach(jardin => {
      creerCarte(jardin);
    });

  } catch (error) {
    console.error("Échec :", error.message); // gère les cas d'erreurs venant de l'API
  }
};

chargerDonnees(); // Au chargement de la page, requête HTTP GET vers l'API

// document.querySelectorAll('.heart-btn').forEach(btn => {
//   btn.addEventListener('click', () => {
//     btn.classList.toggle('favorited');
//   });
// });

// document.querySelectorAll('.details-toggle').forEach(toggle => {
//   toggle.addEventListener('click', () => {
//     const card = toggle.closest('.card');
//     const expanded = card.querySelector('.card-expanded');
//     const arrow = toggle.querySelector('i');
//     if (expanded) {
//       const willOpen = !expanded.classList.contains('is-open');
//       expanded.classList.toggle('is-open', willOpen);
//       arrow.classList.toggle('fa-chevron-down', !willOpen);
//       arrow.classList.toggle('fa-chevron-up', willOpen);
//     } 
//   });
// });

// document.querySelectorAll('.filter-select').forEach(filterGroup => {
//   const checkboxes = filterGroup.querySelectorAll('.filter-options input[type="checkbox"]');
//   const badge = filterGroup.querySelector('.badge-count');

//   function updateBadge() {
//     const count = filterGroup.querySelectorAll('.filter-options input[type="checkbox"]:checked').length;
//     filterGroup.classList.toggle('has-selection', count > 0);
//     badge.textContent = count;
//   }

// document.querySelector('.filters').addEventListener('reset', () => {
//   // Le reset natif décoche déjà les checkboxes,
//   // mais ne déclenche pas 'change' : on relance nous-mêmes la mise à jour des badges
//   setTimeout(() => {
//     document.querySelectorAll('.filter-select').forEach(filterGroup => {
//       const count = filterGroup.querySelectorAll('.filter-options input[type="checkbox"]:checked').length;
//       filterGroup.classList.toggle('has-selection', count > 0);
//       const badge = filterGroup.querySelector('.badge-count');
//       if (badge) badge.textContent = count;
//     });
//   }, 0);
// });

//   checkboxes.forEach(cb => cb.addEventListener('change', updateBadge));
//   updateBadge(); // état initial au chargement
// });