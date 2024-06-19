"use strict";

function testVariables() {
    console.log(xVar); 
    var xVar = "var variable";

    try {
        console.log(xLet); 
        let xLet = "let variable";
    } catch (error) {
        console.error("Error (let):", error.message);
    }

    try {
        console.log(xConst); 
        const xConst = "const variable";
    } catch (error) {
        console.error("Error (const):", error.message);
    }
}

testVariables();
