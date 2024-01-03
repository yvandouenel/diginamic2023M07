let i = true;
{ i && (console.log("hello dans une expression")) }

if (i) console.log("hello via un statement");

// opérateur ternaire
{ i ? console.log("i est vrai") : console.log("i est faux") }

if (i == true) {
  console.log("i est vrai")
} else {
  console.log("i est faux")
}