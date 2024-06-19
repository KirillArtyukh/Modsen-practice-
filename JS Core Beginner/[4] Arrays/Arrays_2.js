"use strict";

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sumFirstHalfOfArray(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return 0;
    }

    const halfIndex = Math.ceil(arr.length / 2);
    const firstHalf = arr.slice(0, halfIndex);
    const sum = firstHalf.reduce((acc, curr) => acc + curr, 0);

    return sum;
}

function getUserInput() {
    rl.question("Enter numbers separated by spaces: ", function (answer) {
        const numbers = answer.split(" ").map(num => parseFloat(num));

        if (numbers.some(isNaN)) {
            console.log("Invalid input. Please enter numbers separated by spaces.");
        } else {
            const sum = sumFirstHalfOfArray(numbers);
            console.log("Sum of the first half of the array:", sum);
        }

        rl.close();
    });
}

getUserInput();
