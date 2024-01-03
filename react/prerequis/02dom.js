// impératif (la recette)
// Création d'un élément du dom
const h1 = window.document.createElement("h1");
// Ajout de texte
h1.innerText = "Titre de niveau 1 ---";
// Placement de l'élément dans le DOM
document.body.appendChild(h1);

// Déclaratif via jsx<h1>Titre de niveau 1</h1>
