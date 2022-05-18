// Fat arrow, wyrażenia lambda
const sum = (a, b) => a + b;

function sumOld(a, b){
  return a + b;
}

console.log(sum(2, 3))

// To be continued
const sumCurried = a => b => a + b;

console.log(sumCurried(2)(3));

const incBy2 = sumCurried(2);

console.log(incBy2(3))

