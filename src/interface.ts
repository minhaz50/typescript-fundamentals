type User = {
  name: string;
  age: number;
};

interface IUser {
  name: string;
  age: number;
}

interface IUserWithRole extends IUser {
  role: "admin" | "user";
}

const user1: User = {
  name: "Minhaz",
  age: 28,
};

const user2: IUser = {
  name: "Israt",
  age: 21,
};

const user3: IUserWithRole = {
  name: "Minha",
  age: 2,
  role: "user",
};

// function
// example
interface Friends {
  [index: number]: string;
}

const friends: Friends = ["A", "B", "C"];

console.log(friends);

// example
interface Add {
  (num1: number, num2: number): number;
}

const add: Add = (num1, num2) => {
  return num1 + num2;
};
