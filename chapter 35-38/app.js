//problem:1
function showDate() {
    let now = new Date();
    document.writeln(now);
}
showDate();

//problem:2
function greet() {
    let firstName = prompt("Enter your first name:");
    let lastName = prompt("Enter your last name:");
    let fullName = (firstName + " " + lastName);
    alert(`Welcome ${fullName}`);
}
greet();

problem: 3
function sum() {
    let num1 = Number(prompt("Enter a first number:"));
    let num2 = Number(prompt("Enter a second number:"));
    return num1 + num2;
}
let result = sum();
alert(`Sum is: ${result}`);

//problem:4
function calculator() {
    let num1 = Number(prompt("Enter a number 1:"));
    let num2 = Number(prompt("Enter a number 2:"));
    let operator = prompt("Enter a operator(+,-,*,/,%)");
    let result;
    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        result = num1 / num2;
    } else if (operator === "%") {
        result = num1 % num2;
    } else {
        result = "Invalid opeartor";
    }
    document.writeln(`Result is: ${result}`);
}
calculator();

//problem:5
function square(a) {
    let result = a * a;
    document.writeln(`Square is: ${result}`)

}
square(2);

//problem:6
function factorial(a) {
    let factorial = 1;
    for (let i = 1; i <= a; i++) {
        factorial = factorial * i;
    }
    document.writeln(`Factorial is: ${factorial}`);
}
factorial(2);

//problem:7
let startNum = Number(prompt("Enter a start number:"));
let endNum = Number(prompt("Enter a end number:"));
if (startNum <= endNum) {
    for (let i = startNum; i <= endNum; i++) {
        document.writeln(`${i} <br>`);
    }
} else {
    document.writeln('Start number should be smaller than or equal to end number.');
}


//problem:8
function calculateHypotenuse() {
    let base = Number(prompt("Enter a base:"));
    let perp = Number(prompt("Enter a perpendicular:"));
    function calculateSquare(num) {
        return num * num;
    }
    let hypotenuse = Math.sqrt(
        calculateSquare(base) + calculateSquare(perp)
    );
    document.writeln(`Hypotenuse is: ${hypotenuse}`);
}
calculateHypotenuse();

//problem:9
// (i)
function areaRectangle(width, height) {
    let area = width * height;
    document.writeln("Area is: " + area);
}

areaRectangle(5, 10);
// (ii)
function areaRectangle(width, height) {
    let area = width * height;
    document.writeln("Area is: " + area);
}
let w = 6;
let h = 2;
areaRectangle(w, h);


//problem:10
function checkPalindrome(str) {
    let reversed = str.split("").reverse().join("");
    if (str === reversed) {
        document.writeln(str + " is a Palindrome");
    } else {
        document.writeln(str + " is NOT a Palindrome");
    }
}
checkPalindrome("madam");

//problem:11
function capitalizeWords(str) {
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    let result = words.join(" ");
    document.writeln(result);
}
capitalizeWords("the quick brown fox");

//problem:12
function findLongestWord(str) {
    let words = str.split(" ");
    let longest = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    document.writeln("Longest word is: " + longest);
}
findLongestWord("Web Development Tutorial");

//problem:13

function countLetter(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}
console.log(countLetter("JSResourceS.com", "o"));

//problem:14

function calcCircumference(radius) {
    let output = 2 * 3.14 * radius;
    document.writeln(`Circumference of circle = ${output} <br>`);
}
calcCircumference(3);

function calcArea(radius) {
    let output = 3.14 * radius * radius;
    document.writeln(`Area of circle = ${output}`);

}
calcArea(3);