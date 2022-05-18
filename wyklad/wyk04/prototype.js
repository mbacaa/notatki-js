const obj = {
	name: 'Jan',
};

function Person(name, yob) {
	this.name = name;
	this.yob = yob;
}

Person.prototype.sayHello = function () {
	return "Hello I'm " + this.name;
};
Person.prototype.howOld = function () {
	return new Date().getFullYear() - this.yob;
};

const panJan = new Person('Jan', 1987);

panJan.toString = function () {
	return '[' + this.name + ' ' + this.yob + ']';
};

console.log(obj.toString());
console.log(panJan.toString());

Object.prototype.toString = function () {
	return '[object Object]';
};
