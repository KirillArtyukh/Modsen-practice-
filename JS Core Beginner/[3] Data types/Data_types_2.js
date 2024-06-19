"use strict";

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getLastCharacter(str) {
    if (str.length === 0) {
        console.log("The string is empty");
        return;
    }

    const lastChar = str.charAt(str.length - 1);
    console.log("Last character of the string:", lastChar);
}

function getUserInput() {
    rl.question("Enter a string: ", function (answer) {
        getLastCharacter(answer);
        rl.close();
    });
}

getUserInput();
