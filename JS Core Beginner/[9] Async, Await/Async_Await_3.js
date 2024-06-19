"use strict";

async function fetchDataFromServer(url) {
    try {
        const response = await fetch(url); 
        if (!response.ok) {
            throw new Error(`Failed to fetch data from ${url}, status: ${response.status}`);
        }
        const data = await response.json();
        return data; 
    } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
        throw error; 
    }
}

async function fetchMultipleServers(urls) {
    try {
        const promises = urls.map(url => fetchDataFromServer(url));

        const results = await Promise.all(promises);

        return results; 
    } catch (error) {
        console.error('Error fetching data from servers:', error);
        throw error; 
    }
}

const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/comments',
    'https://jsonplaceholder.typicode.com/users/1'
];

fetchMultipleServers(urls)
    .then(results => {
        console.log('Data fetched successfully from all servers:');
        results.forEach((data, index) => {
            console.log(`Data from server ${index + 1}:`, data);
        });
    })
    .catch(error => {
        console.error('Error fetching data from servers:', error);
    });
