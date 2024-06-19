"use strict";

function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1; 
}

function delay(seconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (seconds >= 1 && seconds <= 5) {
                resolve(`Success: Generated number ${seconds}`);
            } else {
                reject(`Error: Generated number ${seconds}`);
            }
        }, seconds * 1000); 
    });
}

function generateRandomDelayPromise() {
    const randomNumber = generateRandomNumber();
    return delay(randomNumber);
}
generateRandomDelayPromise()
    .then(message => console.log(message))
    .catch(error => console.error(error));
