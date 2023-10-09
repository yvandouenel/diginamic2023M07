// Création de l'élément du dom button
const button = document.createElement("button");

// Ajout de texte 
button.textContent = "Ajouter un paragraphe";

// Ajouter le button au body
document.body.appendChild(button);

// Déclaration et assignation de l'élément du dom section
const section = document.createElement("section");

// Ajouter la section au body
document.body.appendChild(section);

// Gestion de l'événement click sur le bouton
button.onclick = (event) => {
  // ici la fonction doit faire des traitements
  const p = document.createElement("p");
  p.innerText = "Lorem ipsum ...";
  section.appendChild(p);
};
