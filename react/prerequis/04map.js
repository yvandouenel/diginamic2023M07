const chemins = ["./img/toto.gif", "./img/lilya.gif"];

// Pass a function to map
const photos = chemins.map((chemin) => `<img src="${chemin}" />`);

console.log(photos);