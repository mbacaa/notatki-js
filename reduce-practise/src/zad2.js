'use strict';

// 1 count occurences
const orders = [
	{ id: '1', status: 'pending' },
	{ id: '2', status: 'pending' },
	{ id: '3', status: 'cancelled' },
	{ id: '4', status: 'shipped' },
];

const result1 = orders.reduce((acc, order) => {
	return { ...acc, [order.status]: (acc[order.status] || 0) + 1 };
}, {});

// console.log(result1);

// 2 flatten
const folders = [
	'index.js',
	['flatten.js', 'map.js'],
	['any.js', ['all.js', 'count.js']],
];

const flatten = (acc, item) => {
	if (Array.isArray(item)) {
		return item.reduce(flatten, acc);
	}
	return [...acc, item];
};

const result2 = folders.reduce(flatten, []);

// console.log(result2);

// 3 reduce deconstructed

const reduce = (array, callback, initial) => {
	let acc = initial;

	for (let i = 0; i < array.length; i++) {
		acc = callback(acc, array[i], i, array);
	}

	return acc;
};

const result3 = reduce(
	[1, 2, 3],
	(acc, num) => {
		return (acc += num);
	},
	0
);

console.log(result3);
