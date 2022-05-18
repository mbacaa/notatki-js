// Wzorzec moduł, ukrywa "prywatne" pola, metody a zwraca tylko publczne
const lib = {};

lib.module = (function () {
	let privateVal1 = 2;
	let privateVal2 = 2;

	const privFunction = (x) => x * 2;

	return {
		publicKey: 1,

		publicMethod: function (x) {
			privateVal2 += 2;
			return x + privateVal1 + privFunction(privateVal2);
		},
	};
})();

console.log(lib.module.publicMethod(2));
