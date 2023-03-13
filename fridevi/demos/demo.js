const axios= require('axios')

let usersNames = [];

let response = axios('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.data)
    .then(data => data.map(user => user.username))
    .catch(err => console.log(err))

    console.log(response);

