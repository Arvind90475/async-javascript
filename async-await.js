const API_URL = 'https://jsonplaceholder.typicode.com/todos/1';


// async function always return promises 
const getTodods = async () => {
    const response = await fetch(API_URL); // the await keyword blocks the code but since in this case it is inside a async function its not blocked
    const todos = await response.json();
    return todos;
}




getTodods().then(data => console.log('resolved', data))