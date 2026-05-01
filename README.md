# Typescript Fundamentals

## How to install typescript

## To install typescript globally run this command in terminal :

### npm install -g typescript

### Now command [ tsc --init ] in terminal.

It will open tsconfig file. Now comment out of rootDir and outDir. You can keep folder name anything you want insted of src or dist. But it's recommended to keep the default folder name.

# Typescript Data types

TypeScript extends JavaScript by adding static types. Here's a comprehensive breakdown of TypeScript data types:

### Primitive Types

## string

Text data, denoted by quotes

let name: string = "John";
let greeting: string = 'Hello';
let template: string = `Hi ${name}`;

## number

All numbers (integers, floats, positive, negative)

let age: number = 25;
let price: number = 99.99;
let hex: number = 0xf00d;
let binary: number = 0b1010;

## boolean

true or false values

let isActive: boolean = true;
let isComplete: boolean = false;

## bigint

For very large integers (ES2020+)

let largeNumber: bigint = 9007199254740991n;
symbol
Unique, immutable identifiers

let uniqueId: symbol = Symbol("id");
