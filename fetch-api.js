
const API_URL = 'https://jsonplaceholder.typicode.com/todos/1';

fetch(API_URL)
    .then(response => response.json()) // on response object there is a property _proto which has json method which returns a promise that's why there is another .then
    .then(data => console.log(data))
    .catch(err => {
        console.log(err);
    });


fetch(API_URL)
    .then(response => console.log(response))
    .catch(err => {
        console.log(err);
    });
