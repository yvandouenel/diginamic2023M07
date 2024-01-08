let j: number = 12;
console.log(`j: `, j);

function test(name: string): string {
  return "Hello" + name;
}
test("12");

// Types communs
// Types primitifs
let toto: boolean = false;
let size: number = 16;
let text: string = "Message";

// Tableaux
const fruits: string[] = ["Orange", "Banane"];
const nbs: number[] = [1, 2];

const nbs_fruits: string[] | number[] = ["Orange", "Banane"];

// Tuples
const point: [number, number] = [12.3, 54.23];
let contact: [string, number | string, boolean] = ["Bob", 72, false];

// Enumération
enum Color {
  white,
  blue,
  red,
}
let c: Color = Color.red;

enum Dpt {
  herault = "Hérault",
  gard = "Gard",
  lozere = "Lozère",
}
let d: Dpt = Dpt.gard;
console.log(`d`, d);

// Quand on ne connaît pas le type à l’avance
let test2: any = 4;
test2 = "Message"; // Revient à du js classique

let n: null = null;

let u: undefined = undefined;

// Fonction qui ne renvoie rien
function testVoid(text: string): void {
  console.log(`Hello ${text}`);
}

// Fonction qui génère une exception
function error(message: string): never {
  throw new Error(message);
}
function loadToken(): Promise<string | void> {
  return fetch("https://www.coopernet.fr/session/token")
    .then((response) => {
      if (response.status !== 200) {
        throw new Error("pb sur le serveur" + response.status);
      } else return response.text();
    })
    .then((token) => {
      return token;
    })
    .catch((error) => {
      console.log(`erreur attrapée : ` + error);
    });
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
}

function updateUser(id: number, update: Partial<User>) {
  const user = {
    id: 12,
    firstName: "Bob",
    lastName: "Dylan",
    role: "singer",
  };
  const newUser = { ...user, ...update, id};
  console.log(`newUser`, newUser);
}

updateUser(233, { role: "writer", lastName: "titi" });

let z = "z"; // implicitement typé à string par inférence
z = 2;
