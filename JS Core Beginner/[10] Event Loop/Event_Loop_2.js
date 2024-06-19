"use strict";

async function fetchDataWithTimeout(url, timeout = 5000) {
    const controller = new AbortController();
    const signal = controller.signal;
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
        const response = await fetch(url, { signal });
        clearTimeout(timeoutId);
        return await response.json();
    } catch (error) {
        if (error.name === 'AbortError') {
            console.log('Request aborted due to timeout');
        } else {
            console.error('Error fetching data:', error.message);
        }
    }
}

const apiUrl = 'https://api.example.com/data';
fetchDataWithTimeout(apiUrl, 5000)
    .then(data => console.log('Received data:', data))
    .catch(error => console.error('Fetch error:', error));
