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
