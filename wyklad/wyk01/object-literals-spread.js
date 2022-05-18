// Object literal
var o = {
	klucz: 'wartosc',
};

console.log(o.klucz);
console.log(o['klucz']);

var nazwaKlucza = 'klucz';

console.log(o[nazwaKlucza]);
delete o.klucz;

o.klucz2 = 22;

console.log(o.klucz2);

const imie = 'Zenon';

const osoba = {
	imie: 'Zenon',
};

const osoba2 = {
	imie: imie,
};

const osoba3 = { imie };

console.log(osoba3);

const osoba4 = {
	imie: 'Han',
	wiek: 45,
};

const osoba5 = {
	nazwisko: 'Solo',
	wiek: 89,
};
// Spread
const osoba6 = { ...osoba5, ...osoba4 };

console.log(osoba6);

const osoba7 = Object.assign({}, osoba5, osoba4);

console.log(osoba7);

// Destructuring
const [one, two] = [1, 2, 3];
console.log(one);

console.log(two);

const { nazwisko, wiek } = osoba6;
console.log(nazwisko);

console.log(wiek);
