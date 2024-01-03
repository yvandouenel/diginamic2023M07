/**
 * renvoie la somme des deux paramètres
 * @param {number} a 
 * @param {number} b 
 * @returns {number} a+b
 */
/* function sum(a, b) {// paramètres
  // code ici
  console.log(`a : `, a);
  return a + b;// le retour 
} */
const sum = (a, b) => a + b; 
const double = a => a * 2; 
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

withdraw(account, amount); // Attention, le premier argument est passé en référence alors que le deuxième est passé en valeur

console.log(`account`, account);
console.log(`amount`, amount);
