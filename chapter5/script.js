// Problem 1
document.writeln("<h2>Problem 1</h2>");
let a = 5;
let b = 3;
let sum = a + b;
document.writeln(`Sum of ${a} and ${b} is ${sum}<br><br>`);


// Problem 2
document.writeln("<h2>Problem 2</h2>");
let subtract = a - b;
let multiply = a * b;
let division = a / b;
let modulus = a % b;

document.writeln(`Subtract of ${a} and ${b} is ${subtract}<br>`);
document.writeln(`Multiplication of ${a} and ${b} is ${multiply}<br>`);
document.writeln(`Division of ${a} and ${b} is ${division}<br>`);
document.writeln(`Modulus of ${a} and ${b} is ${modulus}<br><br>`);


// Problem 3
document.writeln("<h2>Problem 3</h2>");
let number;

document.writeln(`Value after variable declaration is: ${number} <br>`);

number = 5;
document.writeln(`Initial value: ${number} <br>`);

number++;
document.writeln(`Value after increment is: ${number} <br>`);

number += 7;
document.writeln(`Value after addition is: ${number} <br>`);

number--;
document.writeln(`Value after decrement is: ${number} <br>`);

let remainder = number % 3;
document.writeln(`The remainder is: ${remainder}<br><br>`);


// Problem 4
document.writeln("<h2>Problem 4</h2>");
let ticketPrice = 600;
let numberOfTickets = 5;
let movieTotalCost = ticketPrice * numberOfTickets;

document.writeln(`Total cost to buy ${numberOfTickets} tickets to a movie is ${movieTotalCost} PKR<br><br>`);


// Problem 5
document.writeln("<h2>Problem 5</h2>");
let table = 12;
document.writeln(`<h2>Table of ${table}</h2>`);

document.writeln(`${table} x 1 = ${table * 1} <br>`);
document.writeln(`${table} x 2 = ${table * 2} <br>`);
document.writeln(`${table} x 3 = ${table * 3} <br>`);
document.writeln(`${table} x 4 = ${table * 4} <br>`);
document.writeln(`${table} x 5 = ${table * 5} <br>`);
document.writeln(`${table} x 6 = ${table * 6} <br>`);
document.writeln(`${table} x 7 = ${table * 7} <br>`);
document.writeln(`${table} x 8 = ${table * 8} <br>`);
document.writeln(`${table} x 9 = ${table * 9} <br>`);
document.writeln(`${table} x 10 = ${table * 10} <br><br>`);


// Problem 6
document.writeln("<h2>Problem 6</h2>");
let celsius = 8;
let fahrenheit = (celsius * 9 / 5) + 32;

document.writeln(`${celsius} °C is ${fahrenheit} °F <br>`);

fahrenheit = 5;
celsius = (fahrenheit - 32) * 5 / 9;

document.writeln(`${fahrenheit} °F is ${celsius} °C<br><br>`);


// Problem 7
document.writeln("<h2>Problem 7</h2>");
document.writeln("<h2>Shopping Cart</h2>");

let item1Price = 20;
let item1Quantity = 2;
let item2Price = 50;
let item2Quantity = 4;
let shippingCharges = 100;

let cartTotalCost = (item1Price * item1Quantity) +
    (item2Price * item2Quantity) +
    shippingCharges;

document.writeln(`Price of item 1 is ${item1Price} <br>`);
document.writeln(`Quantity of item 1 is ${item1Quantity} <br>`);
document.writeln(`Price of item 2 is ${item2Price} <br>`);
document.writeln(`Quantity of item 2 is ${item2Quantity} <br>`);
document.writeln(`Shipping charges ${shippingCharges}<br><br>`);
document.writeln(`Total cost of your order is ${cartTotalCost}<br><br>`);


// Problem 8
document.writeln("<h2>Problem 8</h2>");
document.writeln("<h2>Mark Sheet</h2>");

let totalMarks = 100;
let obtainedMarks = 40;
let percentage = (obtainedMarks / totalMarks) * 100;

document.writeln(`Total Marks: ${totalMarks} <br>`);
document.writeln(`Obtained Marks: ${obtainedMarks} <br>`);
document.writeln(`Percentage: ${percentage}%<br><br>`);


// Problem 9
document.writeln("<h2>Problem 9</h2>");
document.writeln("<h2>Currency in PKR</h2>");

let totalPKR = 10 * 104.80 + 25 * 28;
document.writeln(`Total Currency in PKR: ${totalPKR}<br><br>`);


// Problem 10
document.writeln("<h2>Problem 10</h2>");

let num = ((5 + 5) * 10) / 2;
document.writeln(`Result is: ${num}<br><br>`);


// Problem 11
document.writeln("<h2>Problem 11</h2>");
document.writeln("<h2>Age Calculator</h2>");

let currentYear = 2025;
let birthYear = 2010;

let age1 = currentYear - birthYear;
let age2 = age1 - 1;

document.writeln(`Current year: ${currentYear} <br>`);
document.writeln(`Birth year: ${birthYear} <br>`);
document.writeln(`They are either ${age2} or ${age1} years old.<br><br>`);


// Problem 12
document.writeln("<h2>Problem 12</h2>");
document.writeln("<h2>The Geometrizer</h2>");

let radius = 5;
let circumference = 2 * 3.142 * radius;
let area = 3.142 * radius * radius;

document.writeln(`Radius of a circle: ${radius} <br>`);
document.writeln(`The circumference is: ${circumference}<br>`);
document.writeln(`The area is ${area}<br><br>`);


// Problem 13
document.writeln("<h2>Problem 13</h2>");
document.writeln("<h2>The Lifetime Supply Calculator</h2>");

let favoriteSnack = "Lays";
let currentAge = 17;
let maximumAge = 65;
let amountPerDay = 1;

let remainingYears = maximumAge - currentAge;
let totalNeeded = remainingYears * 365 * amountPerDay;

document.writeln(`Favourite Snack: ${favoriteSnack}<br>`);
document.writeln(`Current age: ${currentAge}<br>`);
document.writeln(`Estimated Maximum Age: ${maximumAge}<br>`);
document.writeln(`Amount of snacks per day: ${amountPerDay}<br>`);
document.writeln(`You will need ${totalNeeded} ${favoriteSnack} to last you until the age of ${maximumAge}<br>`);