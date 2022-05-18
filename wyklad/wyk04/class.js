class Person {
	constructor(firstName, lastName, yob) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.yob = yob;
	}

	howOld() {
		return new Date().getFullYear() - this.yob;
	}

	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	}

	set nick(name) {
		this.pseudo = name;
	}

	get nick() {
		return this.pseudo || 'anonymous';
	}

	isOlderThan(person) {
		return person.yob - this.yob > 0;
	}

	static getOlder(person1, person2) {
		return person1.yob - person2.yob > 0 ? person2 : person1;
	}
}

const panJan = new Person('Jan', 'Przysłowiowy', 1979);
const paniJanina = new Person('Janina', 'Przysłowiowa', 2002);

console.log(panJan.howOld());
console.log(panJan.fullName);
panJan.nick = 'Jasiu';
console.log(panJan.nick);

const older = Person.getOlder(panJan, paniJanina);
console.log(older);

const isOlder = paniJanina.isOlderThan(panJan);
console.log(isOlder);
