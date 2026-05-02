# Typescript Fundamentals

## How to install typescript

## To install typescript globally run this command in terminal :

### npm install -g typescript

### Now command [ tsc --init ] in terminal.

It will open tsconfig file. Now comment out of rootDir and outDir. You can keep folder name anything you want insted of src or dist. But it's recommended to keep the default folder name.

# Typescript Data types

TypeScript extends JavaScript by adding static types. Here's a comprehensive breakdown of TypeScript data types:

## Primitive Types

## string

Text data, denoted by quotes

let name: string = "John"; <br />
let greeting: string = 'Hello'; <br />
let template: string = `Hi ${name}`;

## number

All numbers (integers, floats, positive, negative)

let age: number = 25; <br/>
let price: number = 99.99; <br/>
let hex: number = 0xf00d; <br/>
let binary: number = 0b1010; <br/>

## boolean

true or false values

let isActive: boolean = true; <br/>
let isComplete: boolean = false; <br/>

## bigint

For very large integers (ES2020+)

let largeNumber: bigint = 9007199254740991n; <br/>

## symbol <br/>

Unique, immutable identifiers

let uniqueId: symbol = Symbol("id");

# Non Primitive Data Types

## array

Two syntax options:

let numbers: number[] = [1, 2, 3]; <br/>
let strings: Array<string> = ["a", "b", "c"]; <br/>
let mixed: (string | number)[] = [1, "two", 3]; <br/>

## tuple

Fixed-length array with specific types <br/>

let person: [string, number] = ["Alice", 30]; <br/>
let rgb: [number, number, number] = [255, 0, 128];

## object

let user: { name: string; age: number } = { <br/>
name: "Bob",<br/>
age: 25<br/>
};

## enum

Named constant values

enum Color {<br/>
Red, // 0 <br/>
Green, // 1 <br/>
Blue // 2 <br/>
}

enum Status {<br/>
Active = "ACTIVE",<br/>
Inactive = "INACTIVE"<br/>
}

let myColor: Color = Color.Red;
