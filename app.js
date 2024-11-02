const _ = require('lodash');

const numbers = [10, 20, 30, 40, 50];

const average = _.mean(numbers);
const min = _.min(numbers);
const max = _.max(numbers);

console.log("Średnia arytmetyczna:", average);
console.log("Wartość minimalna:", min);
console.log("Wartość maksymalna:", max);
