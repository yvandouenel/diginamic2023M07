

function Person(name) {
  this.name = name;
}
const titi = new Person("Titi");
/**
 * Constructeur de Bike
 * @param {string} model 
 * @param {number} weight 
 * @param {string} brand 
 * @returns instance de Bike
 */
function Bike(model, weight, brand) {
  // propriétés directes, this représente l'instance en cours de création
  this.model = model;
  this.weight = weight;
  this.brand = brand;
  
}
Bike.prototype.renderBrand = function() {
  console.log(`Ce vélo a pour marque ${this.brand}`);
}
// Instanciation des bikes
const v4 = new Bike("v4", 6, "shimano");
const v5 = new Bike("v5", 7, "Peugeot");
console.log(`v4`, v4);
v5.model = "xx5";
console.log(`v5`, v5);
v4.renderBrand();
v5.renderBrand();