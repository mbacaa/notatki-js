// Reducer: co zrobić z akumulatorem i bieżącym elementem
const sumReducer = (acc, elem) => acc + elem;
const multiplyReducer = (acc, elem) => acc * elem;

const reduce = (reducer, accInit, arr) => {
	let acc = accInit;
	for (let i = 0, { length } = arr; i < length; i++) {
		acc = reducer(acc, arr[i]);
	}
	return acc;
};

const result1 = reduce(sumReducer, 0, [1, 2, 3]);
console.log(result1);

const result2 = reduce(multiplyReducer, 1, [1, 2, 3]);
console.log(result2);

const filter = (pred, arr) =>
	reduce((acc, elem) => (pred(elem) ? acc.concat([elem]) : acc), [], arr);

const result3 = filter((elem) => elem > 5, [3, 7, 9, 1, 6, 3]);
console.log(result2);

const map = (mapper, arr) =>
	reduce((acc, elem) => acc.concat([mapper(elem)]), [], arr);

const result4 = map((elem) => elem * 2, [3, 7, 9, 1, 6, 3]);
console.log(result4);
