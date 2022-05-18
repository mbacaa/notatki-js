class Shape {
	constructor(name = 'Abstract shape') {
		this.name = name;
	}

	get description() {
		return this.name;
	}
}

class Rectangle extends Shape {
	constructor(height, width, name) {
		super('Rectangle');
		this.height = height;
		this.width = width;
	}

	get description() {
		return `${this.name} ${this.height} ${this.width}`;
	}
}
const abstractShape = new Shape();

const rect1 = new Rectangle(3, 5, 'Rect 1');

console.log(rect1.description);

// Utwórz obiekt Animal z polem 'name' i funkcją printName, po którym będą dziedziczyły Mammal
// (z polem age i funkcją getAge) i Fish (z polem weight i funkcją increaseWeight()) .
// Następnie stwórz kolejne obiekty - Dog (z polem breed i nadpisaniem funkcji getAge(),
// która tutaj będzie najpierw wywoływała funkcję getAge() z klasy dziedziczonej, a następnie mnożyła wynik razy 4 i wyświetlała go) i Salmon (z funkcją catch()), które będą dziedziczyły odpowiednio po Mammal i Fish.
// W razie problemów wzoruj się na rozwiązaniu z poprzedniego zadania.

const Animal = function (name) {
	this.name = name;
};
Animal.prototype.printName = function () {
	console.log(this.name);
};

const abstractAnimal = new Animal('Nobody');
abstractAnimal.printName();

const Mammal = function (name, age) {
	Animal.call(this, name);
	this.age = age;
};
Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.constructor = Mammal;
// If you don't set Object.prototype.constructor to Mammal,
// it will take prototype.constructor of Animal (parent).
// To avoid that, we set the prototype.constructor to Mammal (child).

Mammal.prototype.getAge = function () {
	return this.age;
};

const abstractMammal = new Mammal('Mammal', 10);
abstractMammal.printName();
console.log(abstractMammal.getAge());

const Fish = function (name, weight) {
	Animal.call(this, name);
	this.weight = weight;
};
Fish.prototype = Object.create(Animal.prototype);
Fish.prototype.constructor = Fish;
Fish.prototype.increaseWeight = function (increase) {
	this.weight += increase;
};

const goldFish = new Fish('Złota rybka', 50);
goldFish.increaseWeight(20);

console.log(goldFish.weight);

const Dog = function (name, breed, age) {
	Mammal.call(this, name, age);
	this.breed = breed;
};
Dog.prototype = Object.create(Mammal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.getAge = function () {
	const mammalAge = Mammal.prototype.getAge.call(this);
	return mammalAge * 4;
};

const burek = new Dog('Burek', 'CundelBurry', 2);

console.log(burek.getAge());
