'use strict';

const books = require('./books.js');

const result = books.booksArray.reduce((acc, book) => {
	const { title, author } = book;

	if (Array.isArray(book.genre) == true) {
		book.genre.map((genre) => {
			if (genre in acc) {
				// jeżeli gatunek (property) znajduje się w naszym obiekcie to dorzuć do niego tylko kolejne obiekty (tytuł, autor)
				acc[genre].push({ title, author });
			} else {
				acc[genre] = [{ title, author }]; // inaczej stwórz nową property (gatunek) której value to tablica (zawierająca ten obiekt)
			}
		});
	} else {
		if (book.genre in acc) {
			acc[book.genre].push({ title, author });
		} else {
			acc[book.genre] = [{ title, author }];
		}
	}

	return acc;
}, {});

console.log(result);

// Postać oczekiwanego wyniku
// {
//     'fantasy': [
//         { title: 'Lord of the Rings', author: 'J.R.R. Tolkien' },
//         { title: 'Harry Potter', author: 'J.K. Rowling' },
//         ...
//     ],
//     'fiction': [
//         { title: 'The Borthers Karamazov', author: 'Fyodor Dostoyevsky' },
//         ...
//     ],
//     ...
// }
