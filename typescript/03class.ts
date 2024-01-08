class Base {
  private _x = 12;
  get x() {
    console.log("dans le getter");
    return this._x;
  }
  set x(value: number) {
    console.log("dans le setter");
    this._x = value;
  }
}
const b = new Base();
b.x = 25; // équivaut à setX(25)
/* console.log(b.x); // équivaut à b.getX(); */

class Person {
  constructor(private name: string) {
    // No body necessary
  }
  getName() {
    return this.name;
  }
  setName(newName: string) {
   this.name = newName;
  }
}
const p = new Person("Bob");

p.setName("Toto");
console.log(p.getName());