"use strict";

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function firstNonRepeatingChar(str) {
    const charMap = new Map();

    for (let char of str) {
        charMap.set(char, charMap.has(char) ? charMap.get(char) + 1 : 1);
    }

    for (let char of str) {
        if (charMap.get(char) === 1) {
            return char;
        }
    }

    return null;
}

function getUserInput() {
    rl.question("Enter a string: ", function (answer) {
        const firstNonRepeating = firstNonRepeatingChar(answer);
        if (firstNonRepeating) {
            console.log("First non-repeating character:", firstNonRepeating);
        } else {
            console.log("No non-repeating character found.");
        }
        rl.close();
    });
}

getUserInput();
