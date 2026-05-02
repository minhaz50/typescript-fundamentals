// Object Destructuring
// Array Destructuring

const user = {
  id: 2,
  name: {
    firstName: "Minhaz",
    lastName: "Uddin",
  },
  favouriteColor: "black",
  hobby: "programming",
};

const {
  favouriteColor,
  name: { firstName },
} = user;

console.log(firstName);
console.log(favouriteColor);

// array Destructuring

const friends = ["Minha", "Minhaz", "Israt"];

const [, , c] = friends;

console.log(c);
