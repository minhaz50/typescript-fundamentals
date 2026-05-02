// Union
type UserRole = "admin" | "user" | "guest";

const getDashboard = (role: UserRole) => {
  if (role === "admin") {
    return "Admin Dashboard";
  } else if (role === "user") {
    return "User Dashboard";
  } else {
    return "Gutest Dashboard";
  }
};

console.log(getDashboard("admin"));

// intersection

type Employee = {
  id: string;
  name: string;
  phoneNo: string;
};

type Manager = {
  designation: string;
  teamSize: number;
};

type EmployeeManager = Employee & Manager;

const userMinhaz: EmployeeManager = {
  id: "234",
  name: "Minhaz",
  phoneNo: "234",
  designation: "Junior Software Enginner",
  teamSize: 22,
};

console.log(userMinhaz);
