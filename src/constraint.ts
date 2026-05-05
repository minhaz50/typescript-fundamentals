// Constraint
type Student = { id: number; name: string };

const addStudentToCourse = <T extends Student>(studentInfo: T) => {
  return {
    course: "Next Level",
    ...studentInfo,
  };
};

const student1 = {
  id: 123,
  name: "Minhaz",
  hasLaptot: true,
};

const student2 = {
  id: 321,
  name: "Alice Bell",
  hasCar: true,
  isMarried: true,
};

const student3 = {
  id: 333,
  name: "Tom Latham",
  hasWatch: true,
};

const resultTwo = addStudentToCourse(student3);
console.log(resultTwo);
