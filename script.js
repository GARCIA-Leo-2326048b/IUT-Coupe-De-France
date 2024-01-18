const imageEvenement = document.querySelector('.image-evenement-droite');
const divContenuPrincipal = document.getElementById("contenuPrincipal");
const localisation = document.getElementById("localisation"); // Ajout de la référence à la classe "Localisation"
const Container = document.querySelector('.Container'); // Ajout de la référence à la classe "Container"

// Fonction pour charger le contenu lors de la sélection d'une catégorie
function chargerContenu(categorie) {
 
    if (categorie !== "accueil") {
        imageEvenement.style.display = "none";
        localisation.style.display = "none"; // Cacher la classe "Localisation"
        Affiche.style.display = "none"; // Cacher la classe "Affiche"
    } else {
        imageEvenement.style.display = "block";
        localisation.style.display = "block"; // Afficher la classe "Localisation"
        Affiche.style.display = "block"; // Afficher la classe "Affiche"
    }

    if (categorie === "pre-requis") {
        Container.style.display = "block";
        divContenuPrincipal.innerHTML = ""; 
        document.querySelector('.Coupe').style.display = "block"; 
    } else {
        Container.style.display = "none";
        document.querySelector('.Coupe').style.display = "none"; // Masquer l'image "coupe" pour les autres catégories
    }
    
    // Charger le contenu en fonction de la catégorie
    if (categorie === "les-sports") {
        divContenuPrincipal.innerHTML = `
            <div class="cartes">
                <div class="carte">
                    <img src="https://static.vecteezy.com/system/resources/previews/019/980/702/original/soccer-ball-3d-illustration-free-png.png">
                    <p>Football</p>
                </div>
                <div class="carte">
                    <img src="https://pngimg.com/d/rugby_PNG106.png" alt="Touch Rugby">
                    <p>Touch Rugby</p>
                </div>
                <div class="carte">
                    <img src="https://assets.stickpng.com/images/580b585b2edbce24c47b2b93.png" alt="Tennis">
                    <p>Tennis</p>
                </div>
                <div class="carte">
                    <img src="https://pngimg.com/d/ping_pong_PNG102675.png" alt="Tennis de Table">
                    <p>Tennis de Table</p>
                </div>
                <div class="carte">
                    <img src="https://assets.stickpng.com/images/5856a5154f6ae202fedf2761.png" alt="Basket-Ball">
                    <p>Basket-Ball</p>
                </div>
                <div class="carte">
                    <img src="https://purepng.com/public/uploads/large/purepng.com-volleyballlarge-ballvolleyballgamessportsvolleyball-player-1701528201623fdced.png" alt="Volley-Ball">
                    <p>Volley-Ball</p>
                </div>
                <div class="carte">
                <img src="images/hand.png" alt="Handball">
                <p>Handball</p>
            </div>
            </div>
        `;
    } else if (categorie === "contact") {
        divContenuPrincipal.innerHTML = `
        <div class="Gratuit">
        <img src="images/Gratuit.png" alt="Gratuit">
        </div>
        <div class="Instagram">
        <a href="https://www.instagram.com/coupedefrance.iut.2024/?igshid=OGQ5ZDc2ODk2ZA%3D%3D">
            <img src="images/insta.png" alt="Instagram">
        </a>
    </div>
        <div class ="Affiche2">
        <img src="images/info.jpeg" alt="Image de contact">
        </div>
        <div class="site">
        <a href="https://coupedefrance.iut.fr/">https://coupedefrance.iut.fr</a>
        </div>
    `;
    } else if (categorie === "accueil") {
        divContenuPrincipal.innerHTML = `
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Seine-Saint-Denis-Position.svg/507px-Seine-Saint-Denis-Position.svg.png?20070909131358" alt="Lieu de l'événement" class="image-evenement-droite">
        `;
    }
}

// Vérifier la catégorie actuelle lors du chargement initial de la page
if (window.location.hash) {
    const categorieInitiale = window.location.hash.substr(1); // Supprimer le "#" de l'URL
    chargerContenu(categorieInitiale);
} else {
    chargerContenu("accueil"); // Charger la catégorie "accueil" par défaut
}
