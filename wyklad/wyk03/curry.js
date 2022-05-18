const _ = require('lodash');

const sum = (a, b, c) => a + b + c;

const sumCurried = _.curry(sum);

sumCurried(2, 3, 4);
sumCurried(2, 3)(4);

sumCurried(2)(3)(4);

const plus3 = sumCurried(3);
console.log(plus3(7, 2));

const plus5 = sumCurried(2)(3);
console.log(plus5(8));

const sum3 = a => b => c => a + b + c;

