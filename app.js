const factorial = require('./factorial');
const statsFinder = require('./mean-mode');


console.log(`We have the result of 6 factorial is ${factorial(6)}`);
console.log(`We have the result of mean and mode as follow ${statsFinder([500, 400, 400, 375, 300, 350, 325, 300])}`);
