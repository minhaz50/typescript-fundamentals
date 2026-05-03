let user: { name: string; age: number; city: string } = {
  name: "Alice",
  age: 22,
  city: "Bhaluka",
};

type User = {
  name: string;
  role: "admin" | "user " | "guest";
  age?: number;
};

const userMinha: User = {
  name: "Minha",
  role: "admin",
};

console.log(userMinha);

// Function

function add(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(add(2, 2));

// Arrow funciton
const substract = (a: number, b: number) => {
  return a - b;
};

console.log(substract(2, 2));

// Optional Parameter

function greet(name: string, age?: number): string {
  //   return age ? `Hello ${name}, age ${age}` : `Hello ${name}`;

  if (age) {
    return `Hello ${name}. You are ${age} years old.`;
  }
  return `Hello ${name}`;
}

console.log(greet("Minha", 32));

type addFunction = (c: number, d: number) => number;

const sum: addFunction = (c, d) => c + d;

console.log(sum(22, 22));
