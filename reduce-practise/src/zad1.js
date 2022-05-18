'use strict';

const people = [
	{ id: 1, name: 'Miłosz', age: 19 },
	{ id: 2, name: 'Daniel', age: 17 },
	{ id: 3, name: 'Julia', age: 20 },
];

// 1 count
const result1 = people.reduce((acc, person) => {
	return (acc += 1);
}, 0);

// console.log(result1);

// 2 sum ages
const result2 = people.reduce((acc, person) => {
	return (acc += person.age);
}, 0);

// console.log(result2);

// 3 array of names (map)

// PIERWSZY SPOSÓB
// const result3 = people.reduce((acc, person) => {
// 	acc.push(person.name);
// 	return acc;
// }, []);

// DRUGI SPOSÓB, Z UŻYCIEM ...acc
const result3 = people.reduce((acc, person) => {
	return [...acc, person.name];
}, []);

// console.log(result3);

// 4 convert to id => person lookup (dict)
const result4 = people.reduce((acc, person) => {
	return { ...acc, [person.id]: person };
}, {});

// console.log(result4);

// 5 max age
const result5 = people.reduce((acc, person) => {
	if ((acc === null) | (person.age > acc)) {
		return person.age;
	}
	return acc;
}, null);

// console.log(result5);

// 6 min age
const result6 = people.reduce((acc, person) => {
	if ((acc === null) | (person.age < acc)) {
		return person.age;
	}
	return acc;
}, null);

// console.log(result6);

// 7 find by name
const result7 = people.reduce((acc, person) => {
	if (acc !== null) {
		return acc;
	}
	if (person.name === 'Daniel') {
		return person;
	}
	return null;
}, null);

// console.log(result7);

// 8 all over 18
const result8 = people.reduce((acc, person) => {
	if (person.age < 18) {
		return false;
	}
	return acc;
}, true);

// console.log(result8);

// 9 any over 18

const result9 = people.reduce((acc, person) => {
	if (person.age > 18) {
		return true;
	}
	return acc;
}, false);

// console.log(result9);

