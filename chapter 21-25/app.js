// Problem 1
let firstName = prompt("Enter your first name.");
let lastName = prompt("Enter your last name.");
let fullName = firstName + " " + lastName;
alert(`Hello, ${fullName}`);

// Problem 2
let mobileModel = prompt("Please enter your favorite mobile phone model.");
document.writeln(`My favorite phone is: ${mobileModel}.<br>`);
document.writeln(`Length of string: ${mobileModel.length}`);

// Problem 3
let word = "Pakistani";
document.writeln(`String: ${word}<br>Index of 'n': ${word.indexOf("n")}`);

// Problem 4
let word = "Hello World";
document.writeln(`String: ${word}<br>Last index of 'l':
 ${word.lastIndexOf("l")}`);

// Problem 5
let word = "Pakistani";
document.writeln(`String: ${word}<br>Character at index 3:
 ${word[3]}`);

// Problem 6
let firstName = prompt("Enter your first name.");
let lastName = prompt("Enter your last name.");
let fullName = firstName.concat(" ", lastName);
alert(`Hello, ${fullName}`);

// Problem 7
let city = 'Hyderabad';
document.writeln(`City: ${city}<br>
 After replacement: ${city.replace('Hyder', 'Islam')}`);

// Problem 8
let message = "Ali and Sami are best friends. They play cricket and football together.";
document.writeln(message.replaceAll('and', '&'));

// Problem 9
let str = "472";
let num = Number(str);
document.write("String Value: " + str + "<br>");
document.write("Type of String: " + typeof str + "<br>");
document.write("Number Value: " + num + "<br>");
document.write("Type of Number: " + typeof num);

// Problem 10

let userInput = prompt("Enter the text to convert into upper case: ");
document.writeln(`User input: ${userInput}<br>`);
document.writeln(`Upper case: ${userInput.toUpperCase()}`);

// Problem 11

let input = prompt("Enter text to conert into title case:");

if (input) {
    let words = input.toLowerCase().split(" ");
    let result = "";

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        result += word[0].toUpperCase() + word.slice(1) + " ";
    }

    alert("Title Case: " + result);
} else {
    alert("Please enter text!");
}


// Problem 12

let num = 35.36;
document.writeln(`Number: ${num}<br>`);
let str = num.toString();
let result = str.replace(".", "");
document.writeln(`String: ${result}`);

//problem 13

let userName = prompt("Enter your name:");

if (
    userName.includes("@") ||
    userName.includes(".") ||
    userName.includes(",") ||
    userName.includes("!")
) {
    alert("Please enter a valid username");
} else {
    alert("Valid username");
}

//problem 14
let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let userSearch = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'm");
userSearch = userSearch.toLowerCase();
if (A.includes(userSearch)) {
    alert(`${userSearch} is available at index ${A.indexOf(userSearch)} in our bakery`);
} else {
    alert(`We are sorry ${userSearch} is not available in our bakery`);
}

//problem 15

let password = prompt("Enter password");

if (
    password.length <= 6 &&
    isNaN(password[0]) &&
    /[a-zA-Z]/.test(password) &&
    /[0-9]/.test(password)
) {
    alert("Valid Password");
} else {
    alert("Invalid Password");
}

// Problem 16

let uni = "University of karachi";
let arr = uni.split(" ");

for (let i = 0; i < arr.length; i++) {
    let word = arr[i];

    for (let j = 0; j < word.length; j++) {
        document.writeln(word[j] + "<br>");
    }

    document.writeln("<br>");
}

// Problem 17
let userInput = prompt("Enter text");
document.writeln(`User input: ${userInput}<br>`);
document.writeln(`Last character of input:${userInput[userInput.length - 1]}`);

//problem 18
let text = "The quick brown fox jumps over the lazy dog";
let words = text.toLowerCase().split(" ");
let count = 0;
for (let i = 0; i < words.length; i++) {
    if (words[i] === "the") {
        count++;
    }
}
document.writeln(`The quick brown fox jumps over the lazy dog <br> There are ${count} occurrence(s) of word 'the'`);
