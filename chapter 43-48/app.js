//problem:1
function power(a, b) {
    let result = 1;
    for (let i = 1; i <= b; i++) {
        result *= a;
    }
    return result;
}
document.writeln(power(2, 4));

//problem:2
function leapYear(year) {
    if (year % 4 === 0) {

        document.writeln("Leap Year");
    } else {
        document.writeln("Not a Leap Year");
    }
}
let year = Number(prompt("Enter Year:"));
leapYear(year);

//problem:3
function sides(a, b, c) {
    return (a + b + c) / 2;
}
function aof(a, b, c) {
    let s = sides(a, b, c);
    let area = Math.sqrt(
        s * (s - a) * (s - b) * (s - c)
    );
    return area;
}
document.writeln(aof(3, 4, 5));

//problem:4
function calcAverage(m1, m2, m3) {
    return ((m1 + m2 + m3) / 3).toFixed(2);
}
function calcPercentage(m1, m2, m3) {
    let total = m1 + m2 + m3;
    return ((total / 300) * 100).toFixed(2);
}
function mainFunction(m1, m2, m3) {
    let avg = calcAverage(m1, m2, m3);
    let percent = calcPercentage(m1, m2, m3);

    document.writeln(`Average:${avg} <br>`);
    document.writeln(`Percentage: ${percent}%`);
}
mainFunction(75, 80, 90);

//problem:5
function myIndexOf(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1;
}
console.log(myIndexOf("hello", "e"));

//problem:6
function removeVowels(sentence) {
    if (sentence.length > 25) {
        return "Sentence should not exceed 25 characters";
    }
    let result = "";
    for (let i = 0; i < sentence.length; i++) {
        let ch = sentence[i].toLowerCase();

        if (ch !== "a" && ch !== "e" && ch !== "i" && ch !== "o" && ch !== "u") {
            result += sentence[i];
        }
    }
    return result;

}
document.writeln(removeVowels("Hello world"));

//problem:7
function countVowelPairs(text) {
    let count = 0;

    for (let i = 0; i < text.length - 1; i++) {
        let pair = text[i].toLowerCase() + text[i + 1].toLowerCase();

        switch (pair) {
            case "aa":
            case "ae":
            case "ai":
            case "ao":
            case "au":
            case "ea":
            case "ee":
            case "ei":
            case "eo":
            case "eu":
            case "ia":
            case "ie":
            case "ii":
            case "io":
            case "iu":
            case "oa":
            case "oe":
            case "oi":
            case "oo":
            case "ou":
            case "ua":
            case "ue":
            case "ui":
            case "uo":
            case "uu":
                count++;
                break;

            default:
                break;
        }
    }
    return count;
}
document.writeln(
    countVowelPairs("Pleases read this application and give me gratuity")
);

//problem:8
let km = parseFloat(prompt("Enter distance between two cities in kilometers:"));
// Function to convert to meters
function toMeters(km) {
    return km * 1000;
}
// Function to convert to feet
function toFeet(km) {
    return km * 3280.84.toFixed(2);
}
// Function to convert to inches
function toInches(km) {
    return km * 39370.1.toFixed(2);
}
// Function to convert to centimeters
function toCentimeters(km) {
    return km * 100000;
}
console.log(`Distance in meters: ${toMeters(km)}`);
console.log(`Distance in feet: ${toFeet(km)}`);
console.log(`Distance in inches: ${toInches(km)}`);
console.log(`Distance in centimeters: ${toCentimeters(km)}`);


//problem:9
let hours = parseInt(prompt("Enter total working hours:"));
let overtimePay = 0;
if (hours > 40) {
    let overtimeHours = hours - 40;
    overtimePay = overtimeHours * 12;
}
console.log(`Total working hours: ${hours}`);
console.log(`Overtime Pay: Rs. ${overtimePay}`);

//problem:10
let amount = parseInt(prompt("Enter amount:"));
let notes100 = Math.floor(amount / 100);
let remaining = amount % 100;
let notes50 = Math.floor(remaining / 50);
remaining = remaining % 50;
let notes10 = Math.floor(remaining / 10);
document.writeln(`You will have ${notes100} hundred notes, ${notes50} fifty notes, ${notes10} ten notes.`);