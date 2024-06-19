"use strict";

function asyncOperation(index) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Async operation ${index} completed`);
            resolve(index);
        }, Math.random() * 1000); 
    });
}

async function sequentialAsyncOperations(count) {
    for (let i = 1; i <= count; i++) {
        try {
            const result = await asyncOperation(i);
            console.log(`Result of async operation ${result}`);
        } catch (error) {
            console.error("Error occurred:", error);
        }
    }
    console.log("All async operations completed");
}

sequentialAsyncOperations(5);
