"use strict";

function operation() {
    // Replace this with your desired operation
    console.log("Performing operation...");
}

const interval = 1000; // Interval in milliseconds
const repetitions = 5; // Number of repetitions

let count = 0;
const intervalId = setInterval(function () {
    operation();
    count++;

    if (count === repetitions) {
        clearInterval(intervalId);
        console.log("Operation finished.");
    }
}, interval);
