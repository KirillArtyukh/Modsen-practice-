"use strict";

class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Country: ${this.country}`);
    }
}

const person1 = new Person("Alice", 30, "USA");
const person2 = new Person("Bob", 25, "Canada");

person1.displayInfo();
person2.displayInfo();
