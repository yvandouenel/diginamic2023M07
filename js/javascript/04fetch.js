fetch("https://restcountries.com/v3.1/nam/fr")
  .then((response) => {
    console.log(`response.status :`, response.status);
    if (response.status == 200) return response.json();
    else throw new Error("Le statut de la réponse n'est pas correct : erreur " + response.status)
  })
  .then((countries) => {
    console.log(`countries`, countries);
  })
  .catch(error => {
    console.error(`Erreur attrapée :`, error);
  })

fetch("https://www.coopernet.fr/session/token")
  .then((response) => {
    console.log(`response.status :`, response.status);
    if (response.status == 200) return response.text();
    else throw new Error("Le statut de la réponse n'est pas correct : erreur " + response.status)
  })
  .then((token) => {
    console.log(`token`, token);
  })
  .catch(error => {
    console.error(`Erreur attrapée :`, error);
  })
