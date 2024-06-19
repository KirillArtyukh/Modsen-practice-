"use strict";

function accessUndefinedProperty(obj) {
    try {
        return obj.undefinedProperty; 
    } catch (error) {
        if (error instanceof TypeError) {
            return "TypeError caught: Cannot access undefined property";
        } else {
            throw error;
        }
    }
}

const obj = {};
console.log(accessUndefinedProperty(obj)); 
