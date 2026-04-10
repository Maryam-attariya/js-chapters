//Problem no :1

// let cityName = prompt("Enter the city name:");
// if(cityName === "Karachi"){
//     alert("Welcome to city of lights");
// }

//Problem no :2

// let gender = prompt("Enter your gender:");
// if (gender === "male") {
//     alert("Good Morning Sir");
// } if (gender === "female") {
//     alert(" Good Morning Ma'am");
// }

//Problem no :3

// let color = prompt("Enter the color of traffic signal (Red, Yellow, Green):");
// if (color === "red") {
//     alert("Stop");
// } else if (color === "yellow") {
//     alert("Ready to Move");
// } else if (color === "green") {
//     alert("Go");
// } else {
//     alert("Invalid color! Please enter Red, Yellow, or Green.");
// }

//Problem no :4

// let fuel = Number(prompt("Enter the remaining fuel in your car (in litres)"));

// if (fuel < 0.25) {
//     alert("Please refill the fuel in your car");
// }

//Problem no :5

// //a
// let a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }
// //b
// let b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }
// //c
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }

// //d

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }
// //e
// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }

// //f
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }


//Problem no :6

// let marks1 = Number(prompt("Enter marks obtained in Subject 1:"));
// let marks2 = Number(prompt("Enter marks obtained in Subject 2:"));
// let marks3 = Number(prompt("Enter marks obtained in Subject 3:"));
// let totalMarks = Number(prompt("Enter total marks for all subjects:"));
// let obtained = marks1 + marks2 + marks3;
// let percentage = (obtained / totalMarks) * 100;
// let grade, remarks;
// if (percentage >= 80) {
//     grade = "A1";
//     remarks = "Excellent";
// } else if (percentage >= 70) {
//     grade = "A";
//     remarks = "Good";
// } else if (percentage >= 60) {
//     grade = "B";
//     remarks = "You need to improve";
// } else if (percentage < 60) {
//     grade = "F";
//     remarks = "Sorry";
// }

// document.writeln("<h1>Mark Sheet</h1> <br><br>");
// document.writeln(`Total marks : ${totalMarks} <br>`);
// document.writeln(`Marks obtained : ${obtained} <br>`);
// document.writeln(`Percentage : ${percentage.toFixed(2)} <br>`);
// document.writeln(`Grade : ${grade} <br>`);
// document.writeln(`Remarks : ${remarks}`);


//Problem no :7

// let secretNumber = 5;
// let userGuess = Number(prompt("Guess the secret number (1 to 10):"));
// if (userGuess === secretNumber) {
//     alert("Bingo! Correct answer");
// } else if (userGuess + 1 === secretNumber) {
//     alert("Close enough to the correct answer");
// }

//Problem no: 8

// let num = Number(prompt("Enter a number:"));
// if (num % 3 === 0) {
//     alert(`${num} is divisible by 3`);
// } else {
//     alert(`${num} is not divisible by 3`);
// }

//Problem no :9

// let num = Number(prompt("Enter the number:"));
// if (num % 2 == 0) {
//     alert("Even number");
// } else {
//     alert("Odd number");
// }

//Problem no :10

// let temperature = Number(prompt("Enter the temperature:"));
// if (temperature > 40) {
//     alert("It is too hot outside.");
// } else if (temperature > 30) {
//     alert("The Weather today is Normal.");
// } else if (temperature > 20) {
//     alert("Today's Weather is cool.");
// } else if (temperature > 10) {
//     alert("OMG! Today's weather is so Cool.");
// }


//Problem no :11

// let num1 = Number(prompt("Enter the first number:"));
// let num2 = Number(prompt("Enter the second number:"));
// let operation = prompt("Enter the operation (+, -, *, /, %):");

// let result;

// if (operation === "+") {
//     result = num1 + num2;
// } else if (operation === "-") {
//     result = num1 - num2;
// } else if (operation === "*") {
//     result = num1 * num2;
// } else if (operation === "/") {
//     result = num1 / num2;
// } else if (operation === "%") {
//     result = num1 % num2;
// } else {
//     alert("Invalid operation!");
// }

// document.writeln(`Result = ${result}`);


