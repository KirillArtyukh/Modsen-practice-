"use strict";

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}

const rectangle = new Rectangle(5, 10);
console.log("Width:", rectangle.width);
console.log("Height:", rectangle.height);
console.log("Area:", rectangle.getArea());
console.log("Perimeter:", rectangle.getPerimeter());
