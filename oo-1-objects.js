/**
 * Created by jf on 12.05.15.
 */

var o1 = {}; // Object by object literal

var o2 = { name: 'Ralph'}; // Object with property name

o2.printName = function () {
  console.log("name = "+this.name);
};

o2.printName();

// Class-like object prototype described by constructor function.

function MyObject(name) {
    this.name = name;

    this.printName = function() {
        console.log("name = ",this.name);
    }
}

var o3 = new MyObject('Peter');
o3.printName();

// Class-like object prototype. Member function attached via prototype member of Object
function AnotherObject(name) {
    this.name = name;
}

AnotherObject.prototype.printName = function() {
    console.log("name = ",this.name);
};

Object.prototype.blabla = function() {
    console.log("It's magic!");
};

var o4 = new AnotherObject('Jan');
o4.printName();
o4.blabla();

console.log(AnotherObject.prototype);