/**
 * Permet de récupérer une chaîne de caractère (un token) dans le cas favorable
 * @returns Promise<string>
 */
function getToken() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let random = Math.random()
      if (random > 0.5) {
        // Cas favorable
        resolve("TSDSAZEdsqsdzeat666+aqrz");
      } else if (random < 0.5 && random > 0.3) resolve("")
      else reject("Problème de token")
    }, 1000);
  })
}
/**
 * Permet de récupérer des utilisateurs dans le cas favorable
 * @returns Promise<string>
 */
function getUsers(token) {
  return new Promise((resolve, reject) => {
    if (!token) {
      reject("vous devez donner un token valide pour récupérer les utilisateurs")
    }
    setTimeout(() => {
      if (Math.random() > 0.5) {
        // Cas favorable
        resolve([
          { name: "bob", uid: 156 },
          { name: "jiji", uid: 358 },
        ]);
      } else reject("Problème récupération des utilisateurs")
    }, 1000);
  })

}

const result = getToken()
  .then((token) => {
    console.log(`J'ai bien recu le token : `, token);
    return getUsers(token);
  })
  .then((users) => {
    console.log(`J'ai bien recu les utilisateurs : `, users);
  })
  .catch(error => {
    console.error(error)
  })
console.log(`result `, result);
console.log(`Ici `);