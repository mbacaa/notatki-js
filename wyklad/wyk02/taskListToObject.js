const myList = [
	{ id: 'be342764-d1da-43d5-a2c9-b7a884845e4c', points: 2, message: 'Hello' },
	{ id: '32f441a9-b069-41f5-a0ba-ca461c6aa134', points: 3, message: 'World' },
	{
		id: '314fe116-ebdb-4ff6-88fd-b9200629270a',
		points: 2,
		message: 'Monday',
	},
	{ id: 'c5e8fd5b-6515-4747-b727-60ce41f6a864', points: 6, message: '!!' },
];

// Zamienić listę na obiekt kluczem będzie wartość id (nie "id"), oto co chcemy uzyskać:
const myObject = {
	'be342764-d1da-43d5-a2c9-b7a884845e4c': {
		points: 2,
		message: 'Hello',
	},
	'314fe116-ebdb-4ff6-88fd-b9200629270a': {
		points: 2,
		message: 'Monday',
	},
	//...
};

const myObjects = myList.reduce(
	(acc, elem) => ({
		...acc,
		[elem.id]: {
			points: elem.points,
			message: elem.message,
		},
	}),
	{}
);

console.log(myObjects['be342764-d1da-43d5-a2c9-b7a884845e4c'].message);
console.log(myObjects);
