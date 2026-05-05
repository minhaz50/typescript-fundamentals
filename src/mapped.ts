const arrayOfNum: number[] = [1, 2, 3];
const arrayOfString: string[] = ["1", "2", "3"];

const arrayOfStringWithMapped: string[] = arrayOfNum.map((num) =>
  num.toString(),
);

console.log(arrayOfStringWithMapped);
