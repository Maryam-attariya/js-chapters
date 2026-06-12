//problem:1
var itemsArray = [
    { name: "juice", price: "50", quantity: "3" },
    { name: "cookie", price: "30", quantity: "9" },
    { name: "shirt", price: "880", quantity: "1" },
    { name: "pen", price: "100", quantity: "2" }
];
let grandTotal = 0;
for (let i = 0; i < itemsArray.length; i++) {
    let total = itemsArray[i].price * itemsArray[i].quantity;
    console.log(itemsArray[i].name + " = " + total);
    grandTotal += total;
}
console.log(`Grand Total = ${grandTotal}`);

//problem:2
let person = {
    name: "Maryam",
    email: "maryam@gmail.com",
    password: "12345",
    age: 18,
    gender: "Female",
    city: "Karachi",
    country: "Pakistan",
};
console.log("age" in person);
console.log("country" in person);
console.log("firstName" in person);
console.log("lastName" in person);


//problem:3
function Student(name, age) {
    this.name = name;
    this.age = age;
}
let student1 = new Student("Ali", 20);
let student2 = new Student("Ahmed", 22);
console.log(student1);
console.log(student2);

//problem:4
function Person(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}
let name = "Ali";
let gender = "Male";
let address = "Karachi";
let education = "Graduate";
let profession = "Engineer";
let person1 = new Person(
    name,
    gender,
    address,
    education,
    profession
);
console.log(person1);
localStorage.setItem("person", JSON.stringify(person1));