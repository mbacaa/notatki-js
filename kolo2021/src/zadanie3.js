'use strict';

//Każde ciastko kosztuje 5 zł, każdy klient może kupić tylko jedno ciastko
//5, 10 lub 20 zł.
//początkowy budżet wynosi 0 zł.

const checkExchangeRec = (nominaly, ilosc5, ilosc10) => {
	if (ilosc5 < 0 || ilosc10 < 0) {
		return false;
	}
	if (nominaly.length == 0) {
		return true;
	}

	if (nominaly[0] == 5) {
		ilosc5 += 1;
	} else if (nominaly[0] == 10) {
		ilosc10 += 1;
	}

	let doWydania = nominaly[0] - 5;

	if (doWydania == 0) {
		return checkExchangeRec(nominaly.slice(1), ilosc5, ilosc10);
	} else if (doWydania == 5) {
		return checkExchangeRec(nominaly.slice(1), ilosc5 - 1, ilosc10);
	} else if (doWydania == 15) {
		return checkExchangeRec(nominaly.slice(1), ilosc5 - 1, ilosc10 - 1);
	}
};

const checkExchange = (nominaly) => {
	return checkExchangeRec(nominaly, 0, 0);
};

console.log(checkExchange([5, 5, 5, 10, 20])); // true
console.log(checkExchange([5, 5, 10, 10, 20])); // false
console.log(checkExchange([10, 10])); // false
console.log(checkExchange([5, 5, 10])); // true
