class Person {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getSleep(numOfHours: number) {
    console.log(`${this.name} is sleeping ${numOfHours} hours.`);
  }
}

class Student extends Person {}

const student1 = new Student("Mr. X", 33, "Dhaka");
student1.getSleep(15);

class Teacher extends Person {
  designation: string;
  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }

  takeClasses(numOfClasses: number) {
    console.log(`${this.name} takes ${numOfClasses} classes.`);
  }
}

const teacher1 = new Teacher("Bulbul Ahmed", 33, "Bhaluka", "sinior Teacher");

teacher1.takeClasses(3);
