// Funkcje mają 4 konteksty (zależne od sposobu wywołania)

//1.  Wywolanie funkcji "zwykłe"
//2.  Jako konstruktor
//3.  Jako metoda
//4.  Z wykorzystaniem apply/call

// Literał obiektu
const obj = {
  value: 1,
  method: function (x) {
    return this.value + x;
  }
}

// Konstruktory - "zwykła" funkcja która ma być wywołana z op. new
function Person(name, yob) {
  this.name = name;
  this.yob = yob;
}

const panJan = new Person("Jan", 1978);

console.log(panJan.name);

// Konwencja nazewnicza: konstruktory piszemy wielką literą bo ...
const panAnon = Person("Nobody", 2000);

//... mogą być problemy
//console.log(panAnon.name);

// this -> global
//console.log(global);

// Konstekst metody
const osoba = {
  name: 'Bolek',
  sayHello: function () {
    return "Hello I'm " + this.name;
  }
}

console.log(osoba.sayHello())

const osoba2 = {
  name: 'Lolek',
  sayHello: () => "Hello I'm " + this.name
}
// Funkcje Fatarrow/lambda nie funkcjonują dobrze jako metody
console.log(osoba2.sayHello());

function hello(message) {
  return "Hello " + this.name + ":" + message;
}

console.log(hello());

const strange = {
  yob: 2000
}

// apply/call
const res = hello.apply(osoba2, [" Hi there"]);
const res2 = hello.call(osoba, " Hi there");
const res3 = hello.call(strange, " Hi there");

console.log(res);
console.log(res2);
console.log(res3);