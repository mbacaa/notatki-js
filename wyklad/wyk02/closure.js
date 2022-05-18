// Closure
function f(a) {
  let s = 3;

  return function (b) {
    s++;
    return a + b + s;
  }
}

const incByX = f(2);
// f zakończyło działanie a "zmienna" s przechowuje swoją wartość

const result = incByX(3);

console.log(result);

const result2 = incByX(3);

console.log(result2);

const result3 = incByX(3);

console.log(result3);

// IEF
const inc = (function () {
  let i = 0;
  return function () {
    return i++;
  }
})();

console.log(inc());
console.log(inc());
console.log(inc());