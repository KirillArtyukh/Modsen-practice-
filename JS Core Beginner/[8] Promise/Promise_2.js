"use strict";

function fetchUrlContent(url) {
return new Promise((resolve, reject) => {
    fetch(url) 
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch ${url}, status: ${response.status}`);
            }
            return response.text(); 
        })
        .then(content => resolve({ url, content }))
        .catch(error => reject(error));
});
}

function fetchMultipleUrls(urls) {
    const promises = urls.map(url => fetchUrlContent(url));

    return Promise.all(promises);
}

const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
];

fetchMultipleUrls(urls)
    .then(results => {
        results.forEach(result => {
            console.log(`URL: ${result.url}, Content length: ${result.content.length}`);
        });
    })
    .catch(error => {
        console.error('Error fetching URLs:', error);
    });
