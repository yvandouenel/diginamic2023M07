"use strict";
let value;
value = random();
function random() {
    if (Math.random() > 0.5)
        return 12;
    else
        return "toto";
}
console.log(typeof value);
// Narrowing dans le cas où le traitement n'est pas le même en fonction du type
if (typeof value === "string") {
    // TypeScript knows that value is a string here
    console.log(value.toUpperCase()); // OK
}
else {
    // TypeScript knows that value is a number here
    console.log(value.toFixed(2)); // OK
}
