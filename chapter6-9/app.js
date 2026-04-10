//Problem no:1

let a = 10;
document.writeln(`Result: <br>`);
document.writeln(`The value of a is: ${a} <br>`);
document.writeln(`............................................ <br><br>`);
document.writeln(`The value of ++a is: ${++a} <br>`);
document.writeln(`Now the value of a is ${a}<br><br><br>`);
document.writeln(`The value of a++ is ${a++}<br>`);
document.writeln(`Now the value of a is: ${a} <br><br><br>`);
document.writeln(`The value of --a is ${--a}<br>`);
document.writeln(`Now the value of a is: ${a} <br><br><br>`);
document.writeln(`The value of a-- is ${a--}<br>`);
document.writeln(`Now the value of a is: ${a} <br>`);

//Problem no:2

// let a = 2;
// let b = 1;
// let result = --a - --b + ++b + b--;
// document.writeln(`a is ${a} <br>`);
// document.writeln(`b is ${b} <br>`);
// document.writeln(`result is ${result}`);

//Problem no:3

let name = prompt("Enter your name:");
alert(`Welcome ${name} !`);

//Problem no:4

let number = Number(prompt("Enter any number you want to print a table:",5));
document.writeln(`<h1> Table of ${number}</h1> <br>`);
document.writeln(`${number} x 1 = ${number * 1} <br>`);
document.writeln(`${number} x 2 = ${number * 2} <br>`);
document.writeln(`${number} x 3 = ${number * 3} <br>`);
document.writeln(`${number} x 4 = ${number * 4} <br>`);
document.writeln(`${number} x 5 = ${number * 5} <br>`);
document.writeln(`${number} x 6 = ${number * 6} <br>`);
document.writeln(`${number} x 7 = ${number * 7} <br>`);
document.writeln(`${number} x 8 = ${number * 8} <br>`);
document.writeln(`${number} x 9 = ${number * 9} <br>`);
document.writeln(`${number} x 10 = ${number * 10} <br>`);

//Problem no:5

let sub1 = prompt("Enter first subject:");
let sub2 = prompt("Enter second subject:");
let sub3 = prompt("Enter third subject:");

let totalMarks = 100;

let obtainMark1 = Number(prompt(`Obtained marks for ${sub1}:`));
let obtainMark2 = Number(prompt(`Obtained marks for ${sub2}:`));
let obtainMark3 = Number(prompt(`Obtained marks for ${sub3}:`));
let totalObtained = obtainMark1 + obtainMark2 + obtainMark3;
let percentage = (totalObtained / (totalMarks * 3)) * 100;

document.writeln("<table>");
document.writeln("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");

document.writeln(`<tr><td>${sub1}</td><td>${totalMarks}</td><td>${obtainMark1}</td><td>${(obtainMark1 / totalMarks * 100).toFixed(2)}%</td></tr>`);
document.writeln(`<tr><td>${sub2}</td><td>${totalMarks}</td><td>${obtainMark2}</td><td>${(obtainMark2 / totalMarks * 100).toFixed(2)}%</td></tr>`);
document.writeln(`<tr><td>${sub3}</td><td>${totalMarks}</td><td>${obtainMark3}</td><td>${(obtainMark3 / totalMarks * 100).toFixed(2)}%</td></tr>`);

document.writeln(`<tr><th>Total</th><th>${totalMarks * 3}</th><th>${totalObtained}</th><th>${percentage.toFixed(2)}%</th></tr>`);
document.writeln("</table>");