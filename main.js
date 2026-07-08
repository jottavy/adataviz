// Fetch + manipulation du DOM (pas testé)

// imports

// import './style.css';
import { texteCompteur } from './util'; 

const afficherCompteurHTML = (combienAffiches, total) => {
  const elementCompteur = document.querySelector('.results-count');
  
  // 🎯 On utilise l'outil pour obtenir le texte parfait
  elementCompteur.textContent = texteCompteurexteCompteur(combienAffiches, total);
};

const chargerDonnees = async () => {
  try {
    const data = await fetch('https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/jardins-partages/records?limit=20');
    if (!data.ok) throw new Error(`Le serveur de Paris a répondu avec un code ${data.status}`);
    const response = await data.json();
    
    afficherCompteurHTML(response.results.length, response.total_count);

  } catch (error) {
    console.error("Échec :", error.message);
  }
};

chargerDonnees();

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