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
        console.error('Error fetching data:', error);
        throw error; 
    }
}

const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

fetchDataFromServer(apiUrl)
    .then(data => {
        console.log('Data fetched successfully:', data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
