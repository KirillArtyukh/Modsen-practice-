"use strict";

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sumFirstAndLastDigit(number) {
    const numStr = number.toString();
    const firstDigit = parseInt(numStr.charAt(0));
    const lastDigit = parseInt(numStr.charAt(numStr.length - 1));
    const sum = firstDigit + lastDigit;
    console.log(`Sum of first and last digit of number ${number} is: ${sum}`);
}

function getUserInput() {
    rl.question("Enter a number: ", function (answer) {
        const number = parseInt(answer);
        if (isNaN(number)) {
            console.log("You entered a non-number. Please enter a number.");
            rl.close();
            return;
        }
        sumFirstAndLastDigit(number);
        rl.close();
    });
}

getUserInput();
