// problem:1
let date = new Date();
document.writeln(date);

// problem:2
let now = new Date();
let month = now.toLocaleString('default', { month: "long" });
alert(`Current month: ${month}`);

// problem:3
let now = new Date();
let day = now.toLocaleString('default', { weekday: "short" });
alert(`Current day: ${day}`);

// problem:4
let now = new Date();
let day = now.toLocaleString('default', { weekday: "long" });
if (day === "Saturday" || day === "Sunday") {
  alert("It's Fun day");
}

// problem:5
let now = new Date();
if (now.getDate() < 16) {
  alert(`First fifteen days of the month`)
} else {
  alert(`Last days of the month`);
}

// problem:6
let d = new Date();
document.writeln(`Current Date: ${d} <br>`);
milisecond = d.getTime();
document.writeln(`Elapsed miliseconds since january 1,1970: ${milisecond} <br>`);
minutes = milisecond / (1000 * 60);
document.writeln(`Elapsed seconds since january 1,1970: ${minutes}`);

// problem:7
let currentTime = new Date();
let hour = currentTime.getHours();
if (hour < 12) {
  alert("Its AM");
} else {
  alert("Its PM");
}

// problem:8
let laterDate = new Date(2020, 11, 31);
document.writeln(`Later date: ${laterDate}`);

// problem:9
let pastRamadan = new Date(2015, 5, 18);
let today = new Date();
let diff = today - pastRamadan;
let days = diff / (1000 * 60 * 60 * 24);
document.writeln(`${Math.floor(days)} days are passed since 1st ramadan 2015`);

// problem:10
let referenceDate = new Date(2015, 0, 1);
let today = new Date();
let diff = today - referenceDate;
let seconds = diff / 1000;
document.writeln(`On reference date ${referenceDate}, <br> ${Math.floor(seconds)} seconds have passed since beginning of 2015`);

// problem:11
let dateObj = new Date();
let hours = dateObj.getHours();
dateObj.setHours(hours + 1) / 60 * 60;
document.writeln(`current date: ${new Date()} <br>`)
document.writeln(`1 hour ago, it was: ${dateObj}`);

// problem:12
let dateObj = new Date();
alert(`Current Date: ${dateObj}`);
dateObj.setFullYear(dateObj.getFullYear() - 100);
alert("100 Years Back: " + dateObj);

// problem:13
let age = Number(prompt("Enter your age:"));
let now = new Date();
let currentYear = now.getFullYear();
let birthYear = currentYear - age;
alert(`Your birth year is: ${birthYear}`);


// problem:14
let customerName = "Maryam Attariya";
let currentMonth = "May";
let numberOfUnits = 410;
let chargesPerUnit = 16;
let netAmount = numberOfUnits * chargesPerUnit;
let latePaymentSurcharge = 350;
let grossAmount = netAmount + latePaymentSurcharge;
document.writeln(`
  <h1>K-Electric Bill</h1>
  Customer Name: ${customerName} <br>
  Current Month: ${currentMonth} <br>
  Number of Units: ${numberOfUnits} <br>
  Charges per Unit: ${chargesPerUnit.toFixed(2)} <br><br>
  Net Amount (Within Due Date): ${netAmount.toFixed(2)} <br>
  Late Payment Surcharge: ${latePaymentSurcharge.toFixed(2)} <br>
  Gross Amount (After Due Date): ${grossAmount.toFixed(2)}
`);