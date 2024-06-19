"use strict";

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sumOfSquares(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return 0;
    }

    const sum = arr.reduce((acc, curr) => acc + curr ** 2, 0);

    return sum;
}

function getUserInput() {
    rl.question("Enter numbers separated by spaces: ", function (answer) {
        const numbers = answer.split(" ").map(num => parseFloat(num));

        if (numbers.some(isNaN)) {
            console.log("Invalid input. Please enter numbers separated by spaces.");
        } else {
            const sum = sumOfSquares(numbers);
            console.log("Sum of squares of the array elements:", sum);
        }

        rl.close();
    });
}

getUserInput();
