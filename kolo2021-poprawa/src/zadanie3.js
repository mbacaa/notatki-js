'use strict';

class CoffeeShop {
	constructor(name, menu, orders = []) {
		this.name = name;
		this.menu = menu;
		this.orders = orders;
	}

	addOrder(name) {
		const item = this.menu.filter((item) => item.item === name)[0];
		if (item === undefined) {
			console.log('This item is currently unavailable!');
		} else {
			this.orders.push(item.item);
			console.log('Order added!');
		}
	}

	fulfillOrder() {
		if (this.orders.length != 0) {
			console.log(`The ${this.orders[0]} is ready!`);
			this.orders.shift();
		} else {
			console.log('All orders have been fulfilled!');
		}
	}

	listOrder() {
		if (this.orders.length != 0) {
			console.log(this.orders);
			return this.orders;
		} else {
			console.log([]);
			return [];
		}
	}

	// dueAmount() {
	// 	const res = this.orders.reduce((acc, curr) => {
	// 		return acc;
	// 	}, 0);

	// 	console.log(res);
	// }

	cheapestItem() {
		const res = this.menu.reduce((acc, curr) => {
			if (curr.price < acc.price) {
				acc = curr;
			}
			return acc;
		});
		console.log(res.item);
	}

	drinksOnly() {
		const res = this.menu.reduce((acc, curr) => {
			if (curr.type === 'drink') {
				acc.push(curr.item);
			}
			return acc;
		}, []);

		console.log(res);
	}

	foodOnly() {
		const res = this.menu.reduce((acc, curr) => {
			if (curr.type === 'food') {
				acc.push(curr.item);
			}
			return acc;
		}, []);

		console.log(res);
	}
}

const obj = new CoffeeShop('Shop1', [
	{ item: 'cinnamon roll', type: 'food', price: 4.99 },
	{ item: 'hot chocolate', type: 'drink', price: 2.99 },
	{ item: 'lemon tea', type: 'drink', price: 2.5 },
]);

// Przykład działania:

// Tworzymy sklep o nazwie "Shop1", który zawiera w menu 3 pozycje:
// [
//   { item: "cinnamon roll", type: "food", price: 4.99},
//   { item: "hot chocolate", type: "drink", price: 2.99}
//   { item: "lemon tea", type: "drink", price: 2.50}
// ]
// tablica zamówień jest pusta

obj.addOrder('espresso'); // "This item is currently unavailable!" (Sklep nie sprzedaje espresso)

obj.addOrder('hot chocolate'); // "Order added!"
obj.addOrder('cinnamon roll'); // "Order added!"

obj.listOrder(); // ["hot chocolate", "cinnamon roll"]

// obj.dueAmount(); // 5.49 (suma cen za hot chocolate i cinnamon roll)

obj.fulfillOrder(); // "The hot chocolate is ready!"
obj.fulfillOrder(); // "The cinnamon roll is ready!"
obj.fulfillOrder(); // "All orders have been fulfilled!" (Wszystkie zamówienia zostały zrealizowane)

obj.listOrder(); // []

// obj.dueAmount(); // 0.0

obj.cheapestItem(); // "lemon tea"
obj.drinksOnly(); // ["hot chocolate", "lemon tea"]
obj.foodOnly(); // ["cinnamon roll"]
