"use strict";

function fetchDataFromAPI(url) {
    return new Promise((resolve, reject) => {
        fetch(url) 
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch data from ${url}, status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => resolve({ url, data }))
            .catch(error => reject(error));
    });
}

function fetchMultipleAPIs(apiUrls) {
    const promises = apiUrls.map(url => fetchDataFromAPI(url));

    return Promise.all(promises);
}

const apiEndpoints = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2'
];

fetchMultipleAPIs(apiEndpoints)
    .then(results => {
        console.log("All API data fetched successfully:");
        results.forEach(result => {
            console.log(`Data from ${result.url}:`, result.data);
        });
    })
    .catch(error => {
        console.error('Error fetching data from APIs:', error);
    });
