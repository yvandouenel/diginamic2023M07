// Création d'un élément du dom
const h1 = window.document.createElement("h1");
h1.innerText = "Hello World!";
window.document.body.appendChild(h1);

// Gestion de l'événement click asynchrone (non bloquant)
// Le deuxième paramètre est de type function et c'est ce que l'on appelle un callback
// On dit que addEventListener est une Higher Order Function car elle attend une fonction en paramètre
h1.addEventListener("click", handleClickH1);

function handleClickH1 () {
  console.log(`Click sur h1`);
  const span = window.document.createElement("span");
  span.innerText = "... texte ";
  h1.appendChild(span);
  /* p.style.fontSize = "3rem"; */
  p.remove();
  document.querySelector("input").focus();
}

// Récupération d'un élément du dom depuis la page html
const p = document.querySelector("p");
console.log(`p est déclarée`);
let h2 = document.getElementById("h2");
/* console.log("class de h2 : ", h2.constructor.name); */
/* while (h2) {
  console.log("class de h2 : ", h2.constructor.name);
  // Remonte la chaîne des prototypes
  h2 = Object.getPrototypeOf(h2);
} */

h2.align = "right";
//h2.hidden = true;
h2.title = "Mon titre de h2";
/* h2.animate(
  [
    // étapes/keyframes
    { transform: "translateY(0px)" },
    { transform: "translateY(300px)" },
  ],
  {
    // temporisation
    duration: 1000,
    iterations: Infinity,
  },
); */

