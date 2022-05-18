// Ogólny schemat do zapamiętania
function f(a) {
  return function (b) {
    return a + b;
  }
}

console.log(f(4)(5));

const incBy2 = f(2);
console.log(incBy2);
console.log(incBy2(3));
console.log(incBy2(7));


const inc = f(1);
console.log(inc);
console.log(inc(3));
console.log(inc(7));