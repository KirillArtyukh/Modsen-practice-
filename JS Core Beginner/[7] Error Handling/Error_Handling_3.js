"use strict";

function divideNumbers(num1, num2) {
    if (num2 === 0) {
        throw new Error("Division by zero is not allowed.");
    }

    return num1 / num2;
}

try {
    const result = divideNumbers(10, 0); 
    console.log("Result:", result);
} catch (error) {
    console.error("Error:", error.message);
}
