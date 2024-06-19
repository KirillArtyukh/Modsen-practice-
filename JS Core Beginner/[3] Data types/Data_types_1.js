"use strict";

function deepEqual(obj1, obj2) {
    if (typeof obj1 !== "object" || typeof obj2 !== "object") {
        return false;
    }
    if (obj1 === null || obj2 === null) {
        return obj1 === obj2;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (!keys2.includes(key)) {
            return false;
        }

        const val1 = obj1[key];
        const val2 = obj2[key];
        if (typeof val1 === "object" && typeof val2 === "object") {
            if (!deepEqual(val1, val2)) {
                return false;
            }
        } else if (val1 !== val2) {
            return false;
        }
    }

    return true;
}

function testCompareObjects() {
    const obj1 = {
        name: "John",
        age: 30,
        address: {
            city: "New York",
            zip: 10001
        }
    };

    const obj2 = {
        name: "John",
        age: 30,
        address: {
            city: "New York",
            zip: 20001
        }
    };
    console.log("Comparing obj1 and obj2:", deepEqual(obj1, obj2)); 
}
testCompareObjects();
