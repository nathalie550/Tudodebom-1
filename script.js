
AOS.init();

// Effectue une requête HTTP GET vers le fichier local "data.json" pour récupérer une liste de produits du restaurant
fetch("../restaurant-bresilien.json")
    .then((rep) => {
        // Lorsque la réponse est reçue, elle est convertie en JSON pour être manipulée en tant qu'objet JavaScript
        return rep.json();
    })

    .then((donnee) => {
        // Une fois les données récupérées et converties, elles sont affichées dans la console pour vérification
        console.log(donnee);
        // Parcourt le tableau de donnee pour récupérer chaque plat     

        donnee.plats.forEach((plat) => {
            // Appelle la fonction 'afficherPlat' pour intégrer les cartes de chaque plat dans la page HTML
            afficherPlat(plat);
        });

        donnee.services.forEach((service) => {
            // Appelle la fonction 'afficher' pour intégrer les services dans la page HTML
            afficherService(service);
        });

        donnee.temoignages.forEach((temoignage) => {
            // Appelle la fonction 'afficher' pour intégrer les  temoignages dans la page HTML
            afficherTemoignage(temoignage);
        });

          // Appelle la fonction 'afficherFichierJson' pour insérer les données en haut du fichier dans la page HTML
          afficherFichierJson(donnee);

            // Appelle la fonction 'afficherPhrase' pour insérer la phrase commentaire dans la page HTML
            afficherPhrase(donnee);
    });



/***********************FONCTION AFFICHER LES DONNEES DU RESTAURANT DANS LA PAGE HTML******************************/

// Rôle : Insérer dynamiquement les informations du restaurant dans la page HTML
// Paramètre : "donnee" objet contenant les informations du restaurant
// Retour : Aucun (la fonction manipule directement le DOM)

function afficherFichierJson(fichierJson) {
    let divCommentaires = 
    `
        <h1>${fichierJson.nomCommercial}</h1>
        <h2>${fichierJson.texteAccroche}</h2>
        <a href="#" class="btn">${fichierJson.texteBouton}</a>
    `;
   
    document.querySelector("#divCommentaires").innerHTML = divCommentaires;
}


/************************FONCTION POUR AFFICHER LA PHRASE COMMENTAIRE DYNAMIQUEMENT DANS LE HTML*****************/
function afficherPhrase(fichierJson) {
    let divDivers = '';

    // Boucle pour parcourir chaque promesse dans le tableau 'promessesClient'
    fichierJson.promessesClient.forEach((promesse) => {
        divDivers += `<p>${promesse}</p>`;
    });
  
    document.querySelector(".divers").innerHTML = divDivers;
}


/****************************************CREATION DANS LA PARTIE HTML DES PLATS***********************************/
function afficherPlat(plat) {
    let template =
        `  <div class="card width40">
                <img src= ${plat.imageurl}>
                    <div class="cardDescription">
                    <h4>${plat.nom}</h4>
                    <p>${plat.desc}</p>
                </div>
            </div>`

    // j'injecte chacune des petites carte dans ma page web dans la div qui a l'id divPlats
    document.querySelector("#divPlats").innerHTML += template
}


/*********************************CREATION DANS LA PARTIE HTML DES SERVICES**************************************/
function afficherService(service) {
    let templateService =
        `  <div class="carousselServiceCard" data-aos="flip-left">              
                        <h4>${service.nom}</h4>
                <p>${service.desc}</p>
                <a href="#" class="boutonService bold">"Reserver ICI"</a>
            </div>`

    // j'injecte chacune des petites carte dans ma page web dans la div qui a l'id divServices
    document.querySelector("#divServices").innerHTML += templateService
}


/*********************************CREATION DANS LA PARTIE HTML DES TEMOIGNAGES***********************************/
function afficherTemoignage(temoignage) {
    let templatetemoignage =
        `  <div class="cardTemoignage" data-aos="flip-down"">
                <img src=assets/drapeau.jpg alt="photo d'un drapeau">
                <div class="descriptionTemoignage">
                    <h4>Type d'expérience : ${temoignage.typeExperience}</h4>
                    <h5>Prénom : ${temoignage.prenom}</h5>
                    <h6>note : ${temoignage.note}</h6>
                    <p>${temoignage.commentaire}</p>
                </div>
            </div>`

    // j'injecte chacune des petites carte dans ma page web dans la div qui a l'id divtemoignages
    document.querySelector("#divtemoignages").innerHTML += templatetemoignage
}




















