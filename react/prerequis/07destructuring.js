const toto = {
  name: "toto",
  age: 22
}
// Destructuring d'objet
const { name, age } = toto;
/* const name = toto.name;
const age = toto.age; */

console.log(`name : `, name);
console.log(`age : `, age);

const fruits = ["banane", "pomme"];
// Destructuring de tableau
const [banane, pomme] = fruits;
/* const banane = fruits[0];
const pomme = fruits[1]; */

console.log(`banane : `, banane);
console.log(`pomme : `, pomme);