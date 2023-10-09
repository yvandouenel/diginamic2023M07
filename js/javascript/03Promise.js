/* function testPromise() {
  return new Promise((resolve, reject) => {
    // Le setTimeout est asynchrone (non bloquant)
    setTimeout(() => {
      // Cas favorable - le Math.random() donne le côté aléatoire
      if (Math.random() > 0.5) {
        resolve("Promesse tenue !")
      }
      // Cas défavorable
      else {
        reject("Essaie encore")
      }
    }, 2000)
  });
}
function testPromise2() {
  return new Promise((resolve, reject) => {
    // Le setTimeout est asynchrone (non bloquant)
    setTimeout(() => {
      // Cas favorable - le Math.random() donne le côté aléatoire
      if (Math.random() > 0.5) {
        resolve("Promesse 2 tenue !")
      }
      // Cas défavorable
      else {
        reject("Essaie encore encore")
      }
    }, 1000)
  });
}

testPromise()
  .then( msg => {
    console.log(`message1 : `, msg);
    return testPromise2();
  })
  .then( msg => {
    console.log(`message2 : `, msg);
  })
  .catch( error => {
    console.error("Erreur attrapée : " + error)
  });

  console.log(`Je suis en ligne 24`);
 */
  fetch("http://localhost:3000/tasks")
  .then(response => {
    console.log(`response.status`, response.status);
    if(response.status !== 200) throw new Error("Pb dans la réponse du serveur");
    return response.json(response);
  })
  .then(data => {
    console.log(`data :`, data);
  })
  .catch(error => {
    console.error("Erreur attrapée" + error);
  })