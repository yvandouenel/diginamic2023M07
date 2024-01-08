"use strict";
class Base {
    constructor() {
        this._x = 12;
    }
    get x() {
        console.log("dans le getter");
        return this._x;
    }
    set x(value) {
        console.log("dans le setter");
        this._x = value;
    }
}
const b = new Base();
b.x = 25; // équivaut à setX(25)
/* console.log(b.x); // équivaut à b.getX(); */
class Person {
    constructor(name) {
        this.name = name;
        // No body necessary
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        this.name = newName;
    }
}
const p = new Person("Bob");
p.setName("Toto");
console.log(p.getName());
