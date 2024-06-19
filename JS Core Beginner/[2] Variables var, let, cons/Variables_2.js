"use strict";

function testReDeclaration() {
    var xVar = "first var variable";
    console.log("First declaration (var):", xVar); 
    var xVar = "second var variable";
    console.log("Second declaration (var):", xVar); 

    
    let xLet = "first let variable";
    console.log("First declaration (let):", xLet); 
    try {
        let xLet = "second let variable"; 
        console.log("Second declaration (let):", xLet);
    } catch (error) {
        console.log("Second declaration (let): Error -", error.message); 
    }

 
    const xConst = "first const variable";
    console.log("First declaration (const):", xConst); 
    try {
        const xConst = "second const variable"; 
        console.log("Second declaration (const):", xConst);
    } catch (error) {
        console.log("Second declaration (const): Error -", error.message); 
    }
}
testReDeclaration();
