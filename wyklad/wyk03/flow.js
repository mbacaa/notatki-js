const fp = require('lodash/fp');

const res= fp.flow(
    x => x + 2,
    x => x * x,
    x => x + 1
)(3);

console.log(res);

const res3 = fp.map(x => x * 2)(([1, 2, 3]));
console.log(res3);

// iteratee-first data-last methods.
const res2 = fp.flow(
    fp.map(x => x * 2),
    fp.map(x => x + 1)
)
([1, 2, 3]);
console.log(res2);


