const user = {
  name: "Rohan",
  age: 20,
  city: "jaipur",
  isAdmin: true,

  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  }
};

user.greet();

  let student = {
    name: "Ashutosh",
    age: 20,
    isStudent: true,
    marks: undefined,
    result: null,
    bigNumber: 12345678901234567890n,
    id: Symbol("studentId"),

    subjects: ["Java", "JavaScript", "DBMS"],

    address: {
        city: "Jaipur",
        state: "Rajasthan"
    },

    greet: function () {
        return "Hello Bhai!";
    }
};

console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.subjects);
console.log(student.address.city);
console.log(student.greet());


const jsonData = '{"name":"Rahul","age":20,"course":"IT"}';

const student = JSON.parse(jsonData);

console.log(student);
console.log(student.name);
console.log(student.age);  
console.log(student.course);