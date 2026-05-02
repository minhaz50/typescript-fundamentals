// Collecting multiple arguments into an array

function sumAll(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15
console.log(sumAll(5, 10, 15, 20)); // Output: 50

// With other parameters

function introduce(greeting: string, ...names: string[]): string {
  return `${greeting} ${names.join(", ")}`;
}

console.log(introduce("Hello", "Alice", "Bob", "Charlie"));

// Rest operator in array destructuring
// Collecting remaining array elements

const fruits = ["apple", "mango", "banana", "orange", "grape"];

const [first, second, ...rest] = fruits;
console.log(first);
console.log(second);
console.log(rest);

// Skipping elements
const [head, , ...tail] = fruits;
console.log(head);
console.log(tail);

// With TypeScript types
const numbers: number[] = [1, 2, 3, 4, 5];
const [one, two, ...remaining]: [number, number, ...number[]] = numbers;

console.log(one);
console.log(two);
console.log(remaining);
