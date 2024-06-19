"use strict";

const readline = require('readline');

function countVowels(str) {
    if (typeof str !== "string") {
        throw new Error("The argument must be a string");
    }

    const vowels = "aeiyouAEYIOU";
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a string: ", (inputString) => {
    try {
        const vowelCount = countVowels(inputString);
        console.log(`The number of vowels in the string is: ${vowelCount}`);
    } catch (error) {
        console.error(error.message);
    } finally {
        rl.close();
    }
});
