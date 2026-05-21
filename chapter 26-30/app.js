// problem:1
let num = Number(prompt("Enter a positive number:"));
document.writeln(`number: ${num} <br>`);
let roundValue = Math.round(num);
document.writeln(`round off value: ${roundValue} <br>`);
let floorValue = Math.floor(num);
document.writeln(`floor value : ${floorValue} <br>`);
let ceilValue = Math.ceil(num);
document.writeln(`Ceil value : ${ceilValue}`);

// problem:2
let num = Number(prompt("Enter a negative number:"));
document.writeln(`number: ${num} <br>`);
let roundValue = Math.round(num);
document.writeln(`round off value: ${roundValue} <br>`);
let floorValue = Math.floor(num);
document.writeln(`floor value : ${floorValue} <br>`);
let ceilValue = Math.ceil(num);
document.writeln(`Ceil value : ${ceilValue}`);

// problem:3
let absValue = Math.abs(-4);
document.writeln(`The absolute value of -4 is: ${absValue}`);

// problem:4
let diceValue = Math.floor(Math.random() * 6 + 1);
document.writeln(`random dice value: ${diceValue}`);

// problem:5
let randomValue = Math.floor(Math.random() * 2 + 1);
let toss;
if (randomValue === 2) {
    toss = "Heads";
    document.writeln(`${randomValue} <br>`);
    document.writeln(`random coin value: ${toss}`);
} else {
    toss = "Tails";
    document.writeln(`${randomValue} <br>`);
    document.writeln(`random coin value: ${toss}`);
}

// problem:6
let randomNum = Math.floor(Math.random() * 100 + 1);
document.writeln(`random number between 1 and 100: ${randomNum}`);

// problem:7
let weight = parseFloat(prompt("Enter your weight:"));
document.writeln(`The weight of user is ${weight} kilograms`);

// problem:8
let secretNumber = Math.floor(Math.random() * 10) + 1;
let userInput = Number(prompt("Enter a secret number between (1-10)"));
if (userInput === secretNumber) {
    alert("Congratulations! You guessed correct");
} else {
    alert("Try again");
}
console.log(secretNumber);

