//___CHAPTER MATHEMATICAL EXPRESSIONS____//
//______________________QNO 1
var a = 10;
document.write("Result:<br>");
  document.write("The value of a is: " + a + "<br><br>");
  document.write(".............................<br><br>");

    document.write("Result:<br>");
  document.write("The value of a is: " + a + "<br><br>");
  document.write("The value of a++ is: " + (a++) + "<br>");
 document.write("Now the value of a is: " + a + "<br><br>");
 document.write("The value of --a is: " + (--a) + "<br>");
 document.write("Now the value of a is: " + a + "<br><br>");

   document.write("The value of a-- is: " + (a--) + "<br>");
   document.write("Now the value of a is: " + a + "<br>");

   //____________________QNO 2
   var a = 2, b = 1;

var result = --a - --b + ++b + b-- ;

// Explanation
// Step 1: --a => a becomes 1, value is 1
// Step 2: --b => b becomes 0, value is 0
// Step 3: ++b => b becomes 1, value is 1
// Step 4: b-- => value is 1, then b becomes 0

// Expression becomes:
// result = 1 - 0 + 1 + 1 = 3

console.log("a =", a);       // 1
console.log("b =", b);       // 0
console.log("result =", result); // 3

//________________________QNO 3
var name = prompt("Enter your name")
alert("Hello, " +  name  +  " Welcome ! ");

//_________________________QNO 4
// Ask the user to enter a number
let num = prompt("Enter a number for multiplication table (default is 5):");

// If user types nothing (empty string), use 5
if (num === "") {
    num = 5;
}

// Convert input to number
num = parseInt(num);
// Show heading
document.write("<h2>Multiplication Table of " + num + "</h2>");

// Loop to show the table
for (let i = 1; i <= 10; i++) {
    document.write(num + " x " + i + " = " + (num * i) + "<br>");
}

//________________________QNO 5
// a) Take subject names from user
let subject1 = prompt("Enter name of 1st subject:");
let subject2 = prompt("Enter name of 2nd subject:");
let subject3 = prompt("Enter name of 3rd subject:");

// b) Total marks for each subject
let totalMarksPerSubject = 100;

// c & d) Take obtained marks from user (no parseInt used)
let marks1 = prompt("Enter obtained marks for " + subject1 + ":");
let marks2 = prompt("Enter obtained marks for " + subject2 + ":");
let marks3 = prompt("Enter obtained marks for " + subject3 + ":");

// e) Calculate total marks and percentage
let totalMarks = totalMarksPerSubject * 3;
let obtainedMarks = (+marks1) + (+marks2) + (+marks3); // Use + before string to convert it to number
let percentage = (obtainedMarks / totalMarks) * 100;

// Display result in a table
document.write("<h2>Marks Sheet</h2>");
document.write("<table border='1' cellpadding='10'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarksPerSubject + "</td><td>" + marks1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarksPerSubject + "</td><td>" + marks2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarksPerSubject + "</td><td>" + marks3 + "</td></tr>");
document.write("<tr><th>Total</th><th>" + totalMarks + "</th><th>" + obtainedMarks + "</th></tr>");
document.write("<tr><th colspan='3'>Percentage: " + percentage.toFixed(2) + "%</th></tr>");
document.write("</table>");





















