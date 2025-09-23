//______Chapter 31-34_____________________________
//_____________________________________Question no 1
// var today = new Date();
// console.log(today);

//_________________________________________Question2
// var months = [
//   "January",
//   "Febuary",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// var now =new Date()
// var currentMonth = now.getMonth()
// var Month = months[currentMonth]
// alert(Month);
//____________________________________Question 3
// var currentDate = new Date();

// var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// var currentDay = currentDate.getDay();
// alert(daysOfWeek[currentDay]);
//___________________________________Question 4


// var daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// for(i=0;i<daysOfWeek.length;i++){
//     if (daysOfWeek==="Sunday"||"Saturday") {
//         alert("Its a fun day");
//     }
// }
//_____________________________________Question  5
// var currentDate = new Date();
// var currentDay = currentDate.getDate();
// var message;
// if (currentDay < 16) {
//     message = "First fifteen days of the month";
// } else {
//     message = "Last days of the month";
// }
// alert(message);

//_______________________________________Question 6
// var today = new Date();
// console.log("Date: " + today);
// milliseconds = new Date().getTime();
// console.log("Milliseconds: "+ milliseconds);
// minutes = new Date().getTime() / 60000;
// console.log("Minutes: " + minutes);

//____________________________________Question 7
// var hour = new Date().getHours()
// if (hour<12) {
//     alert("Its AM");
// }
// else{
//     alert("Its PM");
// }
//________________________________Question 8
// var  laterDate = new Date("December 31, 2020");
// alert(laterDate);

//_______________________________Question 9

// var ramadanStart = new Date("June 18, 2015");
// var today = new Date();
// var difference = today - ramadanStart;
// var daysPassed = Math.floor(difference / (1000 * 60 * 60 * 24));

// console.log(daysPassed + " days have passed since 1st Ramadan, 2015 ");

//________________________________Question 10

// var ramadan2015 = new Date("June 18, 2015");
// var today = new Date();
// var difference = today - ramadan2015;
// var secondsPassed = Math.floor(difference / 1000);
// console.log(secondsPassed + " seconds have passed since 1st Ramadan, 2015.");
//____________________________________Question 11
// var currentDate = new Date();
// var currentHour = currentDate.getHours();
// currentDate.setHours(currentHour);
// alert(currentDate);
//____________________________________Question 12
// var now = new Date();           
// var currentHour = now.getHours(); 

// now.setHours(currentHour);   

// console.log("One hour ahead: " + now);

//_______________________________________Question 13
// var age = prompt("What is your age?");
// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - age;
// console.log("Your birth year is: " + birthYear);
//______________________________________Question 14
var customerName = "Ali Khan";
var months = ["January", "February", "March", "April", "May", "June",
              "July", "August", "September", "October", "November", "December"];
var currentMonth = months[new Date().getMonth()];

var units = 350;
var chargesPerUnit = 16;

var netAmount = units * chargesPerUnit;
var lateCharge = 500;
var grossAmount = netAmount + lateCharge;

console.log("K-Electric Bill");
console.log("Customer Name: " + customerName);
console.log("Month: " + currentMonth);
console.log("Number of Units: " + units);
console.log("Charges per Unit: " + chargesPerUnit);
console.log("Net Amount Payable (within Due Date): " + netAmount);
console.log("Late Payment Surcharge: " + lateCharge);
console.log("Gross Amount Payable (after Due Date): " + grossAmount);
