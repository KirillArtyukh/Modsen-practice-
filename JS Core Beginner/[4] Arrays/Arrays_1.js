"use strict";

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function increaseArrayNumbersByTenPercent(arr) {
    const increasedArray = [];

    for (let number of arr) {
        const increasedNumber = number * 1.1;
        increasedArray.push(increasedNumber);
    }

    console.log("Original array:", arr);
    console.log("Array with numbers increased by 10%:", increasedArray);
}

function getUserInput() {
    rl.question("Enter numbers separated by spaces: ", function (answer) {
        const numbers = answer.split(" ").map(num => parseFloat(num));

        if (numbers.some(isNaN)) {
            console.log("Invalid input. Please enter numbers separated by spaces.");
        } else {
            increaseArrayNumbersByTenPercent(numbers);
        }

        rl.close();
    });
}

getUserInput();
