"use strict";

function validateInteger(number) {
    if (!Number.isInteger(number)) {
        throw new Error("Invalid input: Number must be an integer.");
    }

    return number;
}

try {
    const userInput = 15.5; 
    const validatedNumber = validateInteger(userInput);
    console.log("Validated number:", validatedNumber);
} catch (error) {
    console.error("Error:", error.message);
}
