const h1 = document.getElementById("h1");
// appel de la fonction : on le voit aux parenthèses
// assignation de la référence à la fonction consoleClick qui 
// sera appelée lors du ou des clicks

const consoleClick = function (event, name) {
  console.log(`Bonjour,`, name);
}
h1.onclick = (event) => { consoleClick(event, "Bob") };
console.log(`h1.onclick : `, h1.onclick);

const link_diginamic = document.querySelector("a");
link_diginamic.onclick = function (event) {
  event.preventDefault();
  console.log(`target`, event.target);
};

const form = document.querySelector("form");

// Gestion de l'événement onsubmit
form.onsubmit = function(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  console.log(`Prénom entré : `, formData.get("firstname"));
}
