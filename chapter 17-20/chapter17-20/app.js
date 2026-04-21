// problem :01

let arr = [[]];

// problem :02

let matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1],
]

// problem :03

let i;
for (i = 1; i <= 10; i++) {
    document.writeln(`${i} <br>`);
}
document.writeln(`<hr>`);

// problem :04

let num = Number(prompt("Enter a number to show its multiplication table"));
let length = Number(prompt("Enter length of multiplication table"));
document.writeln(`Multiplication table of ${num} <br> length ${length} <br><br>`);
for (let i = 1; i <= length; i++) {

    document.writeln(`${num} x ${i} = ${num * i} <br>`);
}
document.writeln(`<hr>`);

// problem :05

let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
document.writeln(`${fruits[0]} <br>`);
document.writeln(`${fruits[1]} <br>`);
document.writeln(`${fruits[2]} <br>`);
document.writeln(`${fruits[3]} <br>`);
document.writeln(`${fruits[4]} <br><br>`);

document.writeln(`Element at index 0 is ${fruits[0]} <br>`);
document.writeln(`Element at index 1 is ${fruits[1]} <br>`);
document.writeln(`Element at index 2 is ${fruits[2]} <br>`);
document.writeln(`Element at index 3 is ${fruits[3]} <br>`);
document.writeln(`Element at index 4 is ${fruits[4]} <br>`);
document.writeln(`<hr>`);

// problem :06

document.writeln(`<b>Counting:</b> <br><br>`);
for (let i = 1; i <= 15; i++) {
    document.writeln(`${i},`);
}

document.writeln(` <br><br> <b> Reverse Counting:</b> <br><br>`);
for (let i = 10; i >= 1; i--) {
    document.writeln(`${i},`);
}
document.writeln(` <br><br> <b> Even:</b> <br><br>`);
for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        document.writeln(`${i},`);
    }
}
document.writeln(` <br><br> <b> Odd:</b> <br><br>`);
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        document.writeln(`${i},`);
    }
}
document.writeln(` <br><br> <b> Series:</b> <br><br>`);
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        document.writeln(`${i},k`);
    }
}
document.writeln(`<hr>`);

// problem :07

let list = ["cake", "apple pie", "cookie", "chips", "patties"];
let item = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
let found = false;
let index;

for (let i = 0; i < list.length; i++) {
    if (list[i] === item) {
        found = true;
        index = i;
        break;
    }
}
if (found === true) {
    document.writeln(`${item} is available at index ${index} in our bakery`);
} else {
    document.writeln(`we are sorry. ${item} is not available in our bakery`);
}
document.writeln(`<hr>`);

// problem :08

let A = [24, 53, 78, 91, 12];
let largest = A[0];
for (let i = 1; i < A.length; i++) {
    if (A[i] > largest) {
        largest = A[i];
    }
}
document.writeln(`Array items ${A}<br>`)
document.writeln(`The largest number is: ${largest}<br>`);
document.writeln(`<hr>`);

// problem :09

let B = [24, 53, 78, 91, 12];
let smallest = B[0];
for (let i = 1; i < B.length; i++) {
    if (B[i] < smallest) {
        smallest = B[i];
    }
}
document.writeln(`Array items: ${B}<br>`);
document.writeln(` The smallest number is: ${smallest}<br>`);
document.writeln(`<hr>`);

// problem :10

for (let i = 5; i <= 100; i++) {
    if (i % 5 === 0) {
        document.writeln(`${i},`);
    }
}
