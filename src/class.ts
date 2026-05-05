class Student {
  name: string;
  contactNo: number;
  city: string;

  constructor(name: string, contactNo: number, city: string) {
    this.name = name;
    this.contactNo = contactNo;
    this.city = city;
  }

  studentDeatils() {
    console.log(
      `Details of ${this.name}. His contact number is ${this.contactNo} and city is ${this.city}.`,
    );
  }
}

const student1 = new Student("Minhaz", 3242342, "Bhaluka");

student1.studentDeatils();
