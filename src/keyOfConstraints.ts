type RichPeopleVichle = {
  car: string;
  bike: string;
  cng: string;
};

type MyVichele1 = "car" | "bike" | "cng";
type MyVichele2 = keyof RichPeopleVichle;

const myVichle: MyVichele2 = "bike";
