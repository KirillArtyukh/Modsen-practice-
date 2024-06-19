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

async function sequentialFetch(url1, url2) {
    try {
        const dataFromServer1 = await fetchDataFromServer(url1);

        const responseFromServer2 = await fetch(url2, {
            method: 'POST', 
            body: JSON.stringify(dataFromServer1), 
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!responseFromServer2.ok) {
            throw new Error(`Failed to fetch data from ${url2}, status: ${responseFromServer2.status}`);
        }

        const dataFromServer2 = await responseFromServer2.json();

        return {
            dataFromServer1,
            dataFromServer2
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; 
    }
}
const url1 = 'https://jsonplaceholder.typicode.com/posts/1';
const url2 = 'https://jsonplaceholder.typicode.com/comments';

sequentialFetch(url1, url2)
    .then(results => {
        console.log('Data fetched successfully:');
        console.log('Data from server 1:', results.dataFromServer1);
        console.log('Data from server 2:', results.dataFromServer2);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
