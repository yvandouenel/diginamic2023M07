"use strict";
let j = 12;
console.log(`j: `, j);
function test(name) {
    return "Hello" + name;
}
test("12");
// Types communs
// Types primitifs
let toto = false;
let size = 16;
let text = "Message";
// Tableaux
const fruits = ["Orange", "Banane"];
const nbs = [1, 2];
const nbs_fruits = ["Orange", "Banane"];
// Tuples
const point = [12.3, 54.23];
let contact = ["Bob", 72, false];
// Enumération
var Color;
(function (Color) {
    Color[Color["white"] = 0] = "white";
    Color[Color["blue"] = 1] = "blue";
    Color[Color["red"] = 2] = "red";
})(Color || (Color = {}));
let c = Color.red;
var Dpt;
(function (Dpt) {
    Dpt["herault"] = "H\u00E9rault";
    Dpt["gard"] = "Gard";
    Dpt["lozere"] = "Loz\u00E8re";
})(Dpt || (Dpt = {}));
let d = Dpt.gard;
console.log(`d`, d);
// Quand on ne connaît pas le type à l’avance
let test2 = 4;
test2 = "Message"; // Revient à du js classique
let n = null;
let u = undefined;
// Fonction qui ne renvoie rien
function testVoid(text) {
    console.log(`Hello ${text}`);
}
// Fonction qui génère une exception
function error(message) {
    throw new Error(message);
}
function loadToken() {
    return fetch("https://www.coopernet.fr/session/token")
        .then((response) => {
        if (response.status !== 200) {
            throw new Error("pb sur le serveur" + response.status);
        }
        else
            return response.text();
    })
        .then((token) => {
        return token;
    })
        .catch((error) => {
        console.log(`erreur attrapée : ` + error);
    });
}
function updateUser(id, update) {
    const user = {
        id: 12,
        firstName: "Bob",
        lastName: "Dylan",
        role: "singer",
    };
    const newUser = Object.assign(Object.assign(Object.assign({}, user), update), { id });
    console.log(`newUser`, newUser);
}
updateUser(233, { role: "writer", lastName: "titi" });
let z = "z"; // implicitement typé à string par inférence
z = 2;
