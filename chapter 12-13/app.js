//problem:1

let ch = prompt("Enter a character:");
let ascii = ch.charCodeAt(0);
if (ascii >= 48 && ascii <= 57) {
    console.log("It is a Number");
}
else if (ascii >= 65 && ascii <= 90) {
    console.log("It is an Uppercase Letter");
}
else if (ascii >= 97 && ascii <= 122) {
    console.log("It is a Lowercase Letter");
}
else {
    console.log("It is something else ");
}

//problem:2

let num1 = parseInt(prompt("Enter first number:"));
let num2 = parseInt(prompt("Enter second number:"));

if (num1 > num2) {
    console.log(num1 + " is larger");
}
else if (num2 > num1) {
    console.log(num2 + " is larger");
}
else {
    console.log("Both numbers are equal");
}

//problem:3

let num = Number(prompt("Enter a number:"));
if (num > 0) {
    console.log("Number is positive");

} else if (num < 0) {
    console.log("Number is negative");
} else {
    console.log("Number is zero");
}

//problem:4

let ch = prompt("Enter a single character:");
ch = ch.toLowerCase();
if (
    ch === "a" ||
    ch === "e" ||
    ch === "i" ||
    ch === "o" ||
    ch === "u"
) {
    console.log(true);
} else {
    console.log(false);
}

//problem:5

let password = "123";
let userPassword = prompt('Enter a password:');
if (userPassword === '') {
    alert(" Please enter your password:")
} else if (userPassword === password) {
    alert("Correct! The password you entered matches the original password");
} else {
    alert("Incorrect password");
}

//problem:6

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
console.log(greeting);

//problem:7

let time = parseInt(prompt("Enter time in 24-hour format (e.g., 1900):"));
if (time >= 0 && time < 1200) {
    console.log("Good morning");
} else if (time >= 1200 && time < 1700) {
    console.log("Good afternoon");
} else if (time >= 1700 && time < 2100) {
    console.log("Good evening");
} else if (time >= 2100 && time <= 2359) {
    console.log("Good night");
} else {
    console.log("Invalid time");
}
