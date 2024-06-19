"use strict";

function testScope() {
    // Объявление переменной с использованием var
    if (true) {
        var xVar = "var variable";
        console.log("Inside block (var):", xVar); // Доступно внутри блока
    }
    console.log("Outside block (var):", xVar); // Доступно вне блока

    // Объявление переменной с использованием let
    if (true) {
        let xLet = "let variable";
        console.log("Inside block (let):", xLet); // Доступно внутри блока
    }
    try {
        console.log("Outside block (let):", xLet); // Недоступно вне блока
    } catch (e) {
        console.log("Outside block (let): Error -", e.message);
    }

    // Объявление переменной с использованием const
    if (true) {
        const xConst = "const variable";
        console.log("Inside block (const):", xConst); // Доступно внутри блока
    }
    try {
        console.log("Outside block (const):", xConst); // Недоступно вне блока
    } catch (e) {
        console.log("Outside block (const): Error -", e.message);
    }
}

// Вызов функции для тестирования области видимости
testScope();
