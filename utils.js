// Fonctions pures : formater, filtrer, trier (testées)


// Formatages

  // Nom : "baleine verte" → "Baleine Verte"
export const formaterNom = (texteNom) => {
  if (!texteNom) return "Nom manquant";

  return texteNom
    .toLowerCase()
    .split(' ')
    .map(mot => mot.charAt(0).toUpperCase() + mot.slice(1))
    .join(' ');
    // console.log(`Nom formaté : ${texteNom} → ${nomFormate}`);
};

  // Arrondissement : "13e arrondissement" → "Paris 13"
export const formaterArr = (texteArr) => {
  if (!texteArr) {
    return "Paris";
  }
  const resultatArr = texteArr.match(/\d+/); // peut être remplacer par une fonction avec un split(" "), puis un parseInt() sur le premier élément du tableau, mais regex est plus simple
  if (resultatArr) {
    const numero = resultatArr[0]; 
        return `Paris ${numero}e`; 
  }
  return texteArr;
};

  // Animateur : "Jean Dupont (associatif)" → "Jean Dupont"
export const formaterAnim = (texteAnim) => {
  if (!texteAnim) {
    return "Animateur manquant";
  }
  let texteAnimNettoye = texteAnim.replaceAll("(", " (");
  texteAnimNettoye = texteAnimNettoye.replaceAll("  (", " (");
  texteAnimNettoye = texteAnimNettoye.replaceAll("eme", "e");
  texteAnimNettoye = texteAnimNettoye.replaceAll("°", "e");

  const premiereLettreAnim = texteAnimNettoye.charAt(0).toUpperCase();
  const resteDuTexteAnim = texteAnimNettoye.slice(1).toLowerCase();
  return `${premiereLettreAnim}${resteDuTexteAnim}`;
};

  // Propriétaire : "DEVE" → "Direction des Espaces Verts et de l'Environnement"
export const formaterProprio = (texteProprio) => {
  if (!texteProprio) {
    return "Inconnu";
  }
  let texteProprioNettoye = texteProprio;
  if (texteProprioNettoye === "DEVE") {
    texteProprioNettoye = "Direction des Espaces Verts et de l'Environnement";
  } else if (texteProprioNettoye === "DJS") {
    texteProprioNettoye = "Direction de la Jeunesse et des Sports";
  } else if (texteProprioNettoye === "SNCF r\u00e9seau") {
    texteProprioNettoye = "SNCF Réseau";
  } else if (texteProprioNettoye === "RIVP") {
    texteProprioNettoye = "Régie Immobilière de la Ville de Paris";
  } else if (texteProprioNettoye === "SIEMP") {
    texteProprioNettoye = "Société Immobilière d'Économie Mixte de la Ville de Paris";
  }
  return texteProprioNettoye;
};

// Autres fonctions

  // Texte compteur
export const texteCompteur = (combienAffiches, total) => {
  return `${combienAffiches} jardins trouvés • ${total} résultats`;
};

  // Création de cartes
export const creerCarte = (jardin) => {
  if (jardin.date_fermeture) {
    return; // On arrête la fonction si présence d'une date de fermeture dans le JSON
  }

  const nomFormate = formaterNom(jardin.nom_ev);
  const arrondissementFormate = formaterArr(jardin.arrondissement);
  const animFormate = formaterAnim(jardin.nom_gerant);
  const proprioFormate = formaterProprio(jardin.proprietaire_terrain);

  const grid = document.querySelector('.grid');
  const card = document.createElement('article');
  card.classList.add('card');

  //Première version
  // card.innerHTML = `
  //     <div class="card-header">
  //       <h3 class="card-title">🌿 ${nomFormate}</h3>
  //       <button class="heart-btn" aria-label="Ajouter aux favoris"></button>
  //     </div>
  //     <p class="card-type">${arrondissementFormate}</p>
  //     <ul class="card-info">
  //       <li>📍 ${jardin.adresse}</li>
  //     </ul>
  //     <div class="details-toggle">Détails<i class="fa fa-chevron-down"></i></div>
  //     <div class="card-expanded">
  //       <ul class="card-details">
  //       <li>📏 Surface : Non renseignée</li>
  //       <li>🏛️ Terrain : ${jardin.domaine || 'Non spécifié'}</li>
  //       <li>🚂 Propriétaire : ${proprioFormate}</li>
  //       <hr class="divider">
  //       <li>👥 Géré par : ${animFormate}</li>
  //       <li>🌐 <a href="${jardin.site_web}" target="_blank" rel="noopener">Site web</a>📧<a href="mailto:${jardin.email}" target="_blank" rel="noopener">Email</a></li>
  //       </ul>
  //       <a href="https://www.google.com/maps/search/?api=1&query=${jardin.geo_point_2d.lat},${jardin.geo_point_2d.lon}" target="_blank" rel="noopener" class="cta-button">
  //       <i class="fa fa-location-arrow"></i> S'y rendre
  //       </a>
  //     </div>
  //   `;

  // Deuxième version (sécurisée) : création des éléments un par un pour éviter les injections de code malveillant
  // Carte non déployée
  const cardHeader = document.createElement('div');
  cardHeader.classList.add('card-header');

  const cardTitre = document.createElement('h3');
  cardTitre.classList.add('card-title');
  cardTitre.textContent = `🌿 ${nomFormate}`;
  
  const favBtn = document.createElement('button');
  favBtn.classList.add('heart-btn');
  favBtn.setAttribute('aria-label', 'Ajouter aux favoris');

  const arrItem = document.createElement('p');
  arrItem.classList.add('card-type');
  arrItem.textContent = arrondissementFormate;

  const cardInfo = document.createElement('ul');
  cardInfo.classList.add('card-info');

  const adresseItem = document.createElement('li');
  adresseItem.textContent = `📍 ${jardin.adresse}`;

  cardHeader.appendChild(cardTitre);
  cardHeader.appendChild(favBtn);
  cardInfo.appendChild(adresseItem);

  card.appendChild(cardHeader);
  card.appendChild(arrItem);
  card.appendChild(cardInfo);

  // Bouton Détails
  const detailsBtn = document.createElement('div');
  detailsBtn.classList.add('details-toggle');
  detailsBtn.textContent = 'Détails ';

  const icon = document.createElement('i');
  icon.classList.add('fa', 'fa-chevron-down');
  detailsBtn.appendChild(icon);
  card.appendChild(detailsBtn);

  // Carte déployée
  const cardDeploye = document.createElement('div');
  cardDeploye.classList.add('card-expanded');

  const cardDetails = document.createElement('ul');
  cardDetails.classList.add('card-details');

  const detailsSurface = document.createElement('li');
  detailsSurface.textContent = 'Surface : Non renseignée';

  const detailsTerrain = document.createElement('li');
  detailsTerrain.textContent = `Terrain : ${jardin.domaine || 'Non spécifié'}`;

  const detailsProprio = document.createElement('li');
  detailsProprio.textContent = `Propriétaire : ${proprioFormate || 'Non spécifié'}`;

  const divider = document.createElement('hr');
  divider.classList.add('divider');

  const detailsGerant = document.createElement('li');
  detailsGerant.textContent = `👥 Géré par : ${animFormate}`;

  const detailsContact = document.createElement('li');
  detailsContact.innerHTML = `
  🌐 <a href="${jardin.internet_1 || '#'}" target="_blank" rel="noopener">Site web</a> 
  📧 <a href="mailto:${jardin.mail_1 || ''}">Email</a>
  `;

  const ctaButton = document.createElement('a');
  ctaButton.classList.add('cta-button');
  
  const lat = jardin.geo_point_2d?.lat || 48.8566; // aide de l'IA, on récupère les données seulement si elles existent, si on met les coordonnées par défaut
  const lon = jardin.geo_point_2d?.lon || 2.3522;
  console.log("Mes coordonnées extraites :", lat, lon);
  ctaButton.href = `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`;
  ctaButton.target = '_blank';
  ctaButton.rel = 'noopener';

  const ctaIcon = document.createElement('i');
  ctaIcon.classList.add('fa', 'fa-location-arrow');

  ctaButton.appendChild(ctaIcon);
  ctaButton.appendChild(document.createTextNode(" S'y rendre"));

  cardDetails.appendChild(detailsSurface);
  cardDetails.appendChild(detailsTerrain);
  cardDetails.appendChild(detailsProprio);
  cardDetails.appendChild(divider);
  cardDetails.appendChild(detailsGerant);
  cardDetails.appendChild(detailsContact);

  cardDeploye.appendChild(cardDetails);
  cardDeploye.appendChild(ctaButton);

  card.appendChild(cardDeploye);
  
  detailsBtn.addEventListener('click', () => {
    cardDeploye.classList.toggle('is-open');
    if (cardDeploye.classList.contains('is-open')) {
      icon.classList.remove('fa-chevron-down');
      icon.classList.add('fa-chevron-up');
    } else {
      icon.classList.remove('fa-chevron-up');
      icon.classList.add('fa-chevron-down');
    }
  });
  grid.appendChild(card);
};
