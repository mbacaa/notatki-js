// Scope
// variable resolving (skąd pobierać wartość zmiennej?)

// JS: scope funkcyjny i leksykalny, let dostarcza zasięgu blokowego

// Duuuużo różnych eksperymentów - DO IT YOURSELF!
function f() {
	w = 2; // Zapomniany let,const, var -> dopisanie do global object w node (window w przeglądarce)

	var i = 9;
	console.log(i);
	console.log(j);

	if (2 > 1) {
		var j = 8;
		// let i = 7;
		console.log(i);
	}

	console.log(i);
	console.log(j);
}

f();

var x = 1;
function f1() {
	console.log(w);

	var z = 9;

	console.log(x);

	function f2() {
		console.log(x);
		console.log(z);
		var y = 6;
	}

	f2();
	//console.log(y);
}

f1();

// Obiekt global w środowisku node
console.log(global);
