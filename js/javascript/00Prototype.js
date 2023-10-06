

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
/* function Bike(model, weight, brand) {
  // propriétés directes, this représente l'instance en cours de création
  this.model = model;
  this.weight = weight;
  this.brand = brand;
  
}
Bike.prototype.renderBrand = function() {
  console.log(`Ce vélo a pour marque ${this.brand}`);
} */
/**
 * Class Bike
 * @param {string} model 
 * @param {number} weight 
 * @param {string} brand 
 * @returns instance de Bike
 */
class Bike {
  constructor(model, weight, brand) {
    // propriétés directes, this représente l'instance en cours de création
    this.model = model;
    this.weight = weight;
    this.brand = brand;
  }
  renderBrand() {
    console.log(`Ce vélo a pour marque ${this.brand}`);
  }
}
/**
 * Class qui étend Bike
 * @param {string} model 
 * @param {number} weight 
 * @param {string} brand 
 * @param {number} autonomy 
 * @returns instance de EBike
 */
class EBike extends Bike {
  // constructeur avec 4 paramètres
  constructor(model, weight, brand, autonomy) {
    super(model, weight, brand);
    // propriétés directes, this représente l'instance en cours de création
    this.autonomy = autonomy;
  }
  renderBrand() {
    super.renderBrand();
    console.log(`et c'est un vélo électrique qui a une autonomie de ${this.autonomy} Km`);
  }
  charge() {
    console.log(`Je charge ...`);
  }
}
// Instanciation des bikes
const v4 = new Bike("v4", 6, "shimano");
const v5 = new Bike("v5", 7, "Peugeot");
console.log(`v4`, v4);
v5.model = "xx5";
console.log(`v5`, v5);
v4.renderBrand();
v5.renderBrand();
// Instanciation de Ebike en passant des arguments
const v6 = new EBike("eRockRider", 22, "Decathlon", "60");
console.log(`v6`, v6);
v6.renderBrand();
v6.charge();

class MyArray extends Array {
  getTitle =  function() {
    return "le titre du tableau";
  }
}
const fruits = new MyArray("banane", 'fraise');
console.log(fruits.getTitle());
function test (test) {
  console.log(`test : `, test);
}
test("Hello World");
window.setTimeout(function(){console.log(`test setTimeOut`);}, 2000);