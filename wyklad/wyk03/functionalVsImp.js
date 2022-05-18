// Functional vs. Imperative

// Styl imperatywny raczej koncentruje się na tym JAK mamy, krok po kroku, zadziałać
const doubler = numbers => {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * 2);
  }
  return result;
}

// Styl funkcjonalny raczej koncentruje się na tym CO mamy zrobić (co ma się wydarzyć, bardziej niż JAK
const doublerF = numbers => numbers.map(n => n * 2);

console.log(doublerF([2, 3, 4]));
