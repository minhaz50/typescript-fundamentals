// Regular function with type annotations

function addWithNormalFunction(a: number, b: number) {
  const totalNumber = a + b;
  return totalNumber;
}

console.log(addWithNormalFunction(3, 3));

// Function with optional paramenter

function greet(name: string, title?: string): string {
  if (title) {
    return `Hello ${title} ${name}`;
  }
  return ` Hello ${name}`;
}

console.log(greet("Minhaz"));

// Function with default paramenter
function multiply(a: number, b: number = 2): number {
  return a * b;
}
console.log(multiply(2));

// Arrow function

// Implicit return (single expression)
const addArrow = (a: number, b: number): number => a + b;

console.log(addArrow(2, 2));

// Explicit return with block body
const addArrowExplicit = (a: number, b: number): number => {
  return a + b;
};

console.log(addArrowExplicit(3, 7));

// Single paramenter (parentheses optional)
const square = (x: number): number => x * x;

// With optional paramenter
const greetArrow = (name: string, title?: string): string => {
  return title ? `Hello, ${title} ${name}` : `Hello, ${name}`;
};

console.log(greetArrow("Sir", "Assalamualaikum"));
