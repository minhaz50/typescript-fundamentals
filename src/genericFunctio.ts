// Problem 1: Using 'any' loses type information

function indentityAny(value: any): any {
  return value;
}

const result = indentityAny("Heloo");
result.toUpperCase(); // works but no type saftey
// result.toFixed(2); // Runtime error! No TypeScript error

// Problem 2 : Using specific types isn't reusable
function indentityString(value: string): string {
  return value;
}

function indentityNumber(value: number): number {
  return value;
}
// Need a new funciton for every type!

// Problem 3: Union types are cumbersome

function indentityUnion(value: string | number): string | number {
  return value;
}
const result2 = indentityUnion("hello");
// TypeScript doesn't know if it's string or number
// result2.toUpperCase(); // Error! Could be number

// -------------------------------------------------------------------

// With Generics - solution
function identity<T>(value: T): T {
  return value;
}

const stringResult = identity("Hello");
const numberResult = identity(3432);
const booleanResult = identity(true);

// TypeScript Preserves the exact type!
const runString = stringResult.toLocaleUpperCase();
const runNumber = numberResult.toFixed(2);

console.log(runString);
console.log(runNumber);

// Basic Generic syntax
// Single type parameter

function wrapInArray<T>(value: T): T[] {
  return [value];
}

const numberArray = wrapInArray(5); // number[]
const stringArary = wrapInArray("Hello"); // string []
