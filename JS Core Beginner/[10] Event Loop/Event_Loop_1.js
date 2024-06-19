"use strict";

function delayedCallback(callback) {
    setTimeout(callback, 2000);
}
    function myCallback() {
        console.log('Callback function executed after 2 seconds');
    }

    delayedCallback(myCallback);
