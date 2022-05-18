'use strict';

const hogward = require('./potter.js');

const resultArray = hogward.hogwardArray.reduce((acc, person) => {
	let type;
	if (person.hogwartsStudent === true) {
		person.type = 'student';
	} else if (person.hogwartsStaff === true) {
		person.type = 'staff';
	} else {
		person.type = 'none';
	}

	if (person.alive === true) {
		if (person.house === '') {
			person.house = 'noHouse';
			if (person.house in acc) {
				acc[person.house].push({ name: person.name, type: person.type });
			} else {
				acc[person.house] = [{ name: person.name, type: person.type }];
			}
		} else {
			if (person.house in acc) {
				acc[person.house].push({ name: person.name, type: person.type });
			} else {
				acc[person.house] = [{ name: person.name, type: person.type }];
			}
		}
	}

	return acc;
}, []);

console.log(resultArray);

// [
//     Gryffindor: [
//       { name: 'Harry Potter', type: 'student' },
//       // ...
//     ],
//     Slytherin: [
//       { name: 'Draco Malfoy', type: 'student' },
//       { name: 'Horace Slughorn', type: 'staff' },
//       { name: 'Dolores Umbridge', type: 'staff' },
//       { name: 'Lucius Malfoy', type: 'none' },
//       { name: 'Gregory Goyle', type: 'student' }
//     ],
//     // ...
//     noHouse: [
//       { name: 'Kingsley Shacklebolt', type: 'none' },
//       // ...
//     ]
// ]
