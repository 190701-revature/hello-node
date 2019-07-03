const Axios = require('axios');

console.log('Hello from Node!');


// When we request something with axios, we get a 'promise'

const result = Axios.get('https://www.google.com/search?q=kittens');

/**
 * Promises are a promise to resolve when an async task is completed.
 * the promise exposes a then and catch method which can be applied to define
 * what behavior the promise should invoke when the the promises resolves 
 * (completed successfully) or is rejected (an error occurred).
 */

result.then((data) => {
    console.log('we got data!');
}).catch( (error) => {
    console.log('Something went wrong :(');
});

console.log(result);

console.log('Hello! We made a promise!');