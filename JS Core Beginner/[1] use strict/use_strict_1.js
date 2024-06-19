"use strict";

function factorial(n) {
    if (typeof n !== "number" || n < 0 || !Number.isInteger(n)) {
        throw new Error("The argument must be a non-negative integer");
    }

    if (n === 0 || n === 1) {
        return 1;
    }

    let result = 1;
    for (let i = n; i > 1; i--) {
        result *= i;
    }

    return result;
}


const args = process.argv.slice(2);

if (args.length !== 1) {
    console.error("Please provide exactly one argument");
    process.exit(1);
}

const number = parseInt(args[0], 10);

if (isNaN(number)) {
    console.error("The argument must be a valid number");
    process.exit(1);
}

try {
    const result = factorial(number);
    console.log(`The factorial of ${number} is ${result}`);
} catch (error) {
    console.error(error.message);
    process.exit(1);
}
