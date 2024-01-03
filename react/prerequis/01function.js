/**
 * renvoie la somme des deux paramètres
 * @param {number} a 
 * @param {number} b 
 * @returns {number} a+b
 */
function sum(a, b) {// paramètres
  // oode ici
  console.log(`a : `, a);
  return a + b;// le retour 
}
sum(1, 2);// appel de la fonction sum avec les 2 arguments

/**
 * Fonction impure
 * @param {Object} account 
 * @param {number} amount 
 */
function withdraw(account, amount) {
  // amount n'est pas une constante ici
  account.total -= amount;
  amount -= 10;
  
}
/* Objet littéral (syntaxe du json) sous forme de clés / valeurs */
const account = {
  total: 20
}
const amount = 10; // type primitif
console.log(`account`, account);
console.log(`amount`, amount);

withdraw(account, amount);

console.log(`account`, account);
console.log(`amount`, amount);
