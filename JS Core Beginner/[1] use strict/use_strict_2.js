"use strict";

const readline = require('readline');

function contains(array, value) {
    if (!Array.isArray(array)) {
        throw new Error("The first argument must be an array");
    }

    return array.includes(value);
}

// Create an interface for reading input from the command line
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for an array
rl.question("Enter an array, elements separated by commas: ", (arrayInput) => {
    const array = arrayInput.split(",").map(item => item.trim());

    // Prompt the user for a value to search in the array
    rl.question("Enter a value to search in the array: ", (value) => {
        try {
            // Check if the value is in the array
            const result = contains(array, value);
            // Output the result
            console.log(`The value "${value}" is ${result ? "present" : "not present"} in the array.`);
        } catch (error) {
            // Handle errors
            console.error(error.message);
        } finally {
            // Close the interface
            rl.close();
        }
    });
});


