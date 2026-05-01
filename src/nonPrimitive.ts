// array , object

// Array
// Two syntax options:
let products: string[] = ["laptop", "mobile", "airpod", "mouse"];

// mixed array
let productWithItem: (string | number)[] = [
  "laptop",
  23,
  "mobile",
  12,
  "mouse",
  13,
];

productWithItem.push();

// tuple
// Fixed-length array with specific types

let bikeName: [string, string] = ["Honda", "BMW"];

let tomNameAndAge: [string, number] = ["Tom Allen", 32];
