type User = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "Male" | "Female";
  contactNo: number;
  address: {
    city: string;
    division: string;
  };
};

const user1: User = {
  id: 132,
  name: {
    firstName: "Minhaz",
    lastName: "Uddin",
  },
  gender: "Male",
  contactNo: 1932149,
  address: {
    city: "Bhaluka",
    division: "Mymensingh",
  },
};

// function with type alias

type addFunction = (num1: number, num2: number) => number;

const add: addFunction = (num1, num2) => num1 + num2;
