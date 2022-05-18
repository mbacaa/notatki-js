// Functions as "first class objects"

// Hoisting zmiennych (ale nie przypisań) i definicji funkcji


const result = myMultiply(2, 3);

console.log(result);

let rec = function rec (n) {
  if (n === 0) {return n;}
  return n + rec(n - 1)
}

console.log(rec(3));

// Dwie poniższe funkcje podlegają mechanizmowi hoisting
function myMultiply(a, b) {
  return a * sum(a, b)
}

function sum(a, b) {
  return a + b
}
// console.log(mySum(2, 6));

// Przypisanie do mySum nie podlega mechanizmowi hoisting
let mySum = function (a, b){
  return a + b;
};

// Niekoniecznie do codziennych zastosowań, dla funkcji dostępny jest obiekt arguments (przypominający tablicę)
function countArgs() {
  console.log(arguments);
  return arguments.length;
}

console.log(countArgs(1, 2, 3, "cztery"));

// Pytanie: czy i jak możemy sprawdzać/kontrolować typ przekazywanych argumentów?
function sayHello(name) {
  console.log(name instanceof Array);
  console.log(typeof name);
  if (typeof name !== 'string') {
    console.log("Błędny argument");
  }
}

sayHello(["Jan"]);
sayHello("Zenon");






