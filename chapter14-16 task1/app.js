//problem no : 1
let studentNames = [];

//problem no : 2
let rollNo = new Array();

//problem no : 3
let name = ["Maryam", "Muniza", "Ayesha"];

//problem no : 4
let age = [5, 8, 10];

//problem no : 5
let status = [true, false];

//problem no : 6
let mixedArray = ["Ayesha", 10, true, 4.23];

//problem no : 7

let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
document.writeln(`<ol>
    <li>${qualifications[0]}</li>
    <li>${qualifications[1]}</li>
    <li>${qualifications[2]}</li>
    <li>${qualifications[3]}</li>
    <li>${qualifications[4]}</li>
    <li>${qualifications[5]}</li>
    <li>${qualifications[6]}</li>
    </ol>`)

//problem no : 8
let student = ["Michael", "John", "Tony"];
let score = [320, 230, 480];
let totalMarks = 500;
document.writeln(`Score of ${student[0]} is ${score[0]}. Percentage: ${(score[0] / totalMarks) * 100}% <br>`);
document.writeln(`Score of ${student[1]} is ${score[1]}. Percentage: ${(score[1] / totalMarks) * 100}% <br>`);
document.writeln(`Score of ${student[2]} is ${score[2]}. Percentage: ${(score[2] / totalMarks) * 100}% <br>`);

//problem no : 9
let colors = ["Red", "Green", "Blue"];
document.write(`Original Array: ${colors} <br><br>`);
// a) add color at beginning 
let colorStart = prompt("Enter color to add at beginning:");
colors.unshift(colorStart);
document.write(`After adding at start: ${colors} <br><br>`);

// b) add color at end 
let colorEnd = prompt("Enter color to add at end:");
colors.push(colorEnd);
document.write(`After adding at end: ${colors} <br><br>`);

// c) 2 colors add at beginning
let c1 = prompt("Enter first color to add at start:");
let c2 = prompt("Enter second color to add at start:");
colors.unshift(c1, c2);
document.write(`After adding 2 colors at start: ${colors} <br><br>`);

// d) delete first color
colors.shift();
document.write(`After deleting first color: ${colors} <br><br>`);

// e) delete last color
colors.pop();
document.write(`After deleting last color: ${colors} <br><br>`);

// f) add at specific index
let indexAdd = prompt("Enter index to add color:");
let colorName = prompt("Enter color name:");
colors.splice(indexAdd, 0, colorName);
document.write(`After adding at index ${indexAdd}: ${colors} <br><br>`);

// g) delete from index
let indexDel = prompt("Enter index to delete from:");
let howMany = prompt("How many colors to delete?");
colors.splice(indexDel, howMany);
document.write(`After deleting from index ${indexDel}: ${colors} <br><br>`);

