//__________________Qno 1
// var city = prompt ("Enter your city name")
// if (city === "karachi" ) {
//     console.log( "Welcome to city of lights ! ")
// }
 //______________Qno 2
//  var gender = ("Enter your gender")
//  if (gender === "Male") {
//     console.log("Welcome Sir! ")
//  }
//  if (gender === "Female") {
//     console.log("Welcome Ma'am! ")
//  }
 
// //___________Qno 3
// var color = prompt("Enter signal color:");

// if (color === "Red") {
//     document.write("Must Stop");
// } 
// else if (color === "Yellow") {
//     document.write("Ready to move");
// } 
// else if (color === "Green") {
//     document.write("Move now");
// } 
// else {
//     document.write("Invalid signal color");
// }

// //______________Qno 4
// var fuel = prompt("Enter remaining fuel in your car (in litres):");
// if (fuel <0.25) {
//     alert("Please refill the fuel in your car");
// } 
// //__________________Qno 5
// var a = 4;
// if (++a === 5){
//   alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83){
//   alert("given condition for variable b is true");
// }
// var c = 12;

// if (c++ === 13){
//   alert("condition 1 is true");
// }
// // c is 12 when compared, so false. Then c becomes 13.

// if (c === 13){
//   alert("condition 2 is true");
// }
// // c is now 13 → true

// if (++c < 14){
//   alert("condition 3 is true");
// }
// // ++c means c becomes 14, 14 < 14? false

// if (c === 14){
//   alert("condition 4 is true");
// }
// // c is 14 → true
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;

// if (totalCost === laborCost + materialCost){
//   alert("The cost equals");
// }
// if (true){
//   alert("True");
// }

// if (false){
//   alert("False")
// }
// if("car" < "cat"){
//   alert("car is smaller than cat");
// }

//______________Q no 6
//  var obtMarks = +prompt("Enter your marks (Out of 100)")
// var totalMarks = 100
// var percentage = obtMarks / totalMarks * 100

// if (percentage >= 80 && percentage <= 100) {
//     document.write("<h1> Grade : A+ <br> Remarks: Excellent! </h1>")
// } else if (percentage >= 70 && percentage <= 79) {
//     document.write("<h1> Grade : A <br> Remarks: Good result! </h1>");
// } else if (percentage >= 60 && percentage <= 69) {
//     document.write("<h1> Grade : B <br> Remarks: Focus needed ! </h1>");
// } else if (percentage >= 50 && percentage <= 59) {
//     document.write("<h1> Grade : C <br> Remarks: Average! </h1>");
// } else if (percentage >= 40 && percentage <= 49) {
//     document.write("<h1> Grade : D <br> Remarks: unsatisfied result ! </h1>");
// } else if (percentage >= 0 && percentage <= 39) {
//     document.write("Fail <br> You need to do hardwork !")
// } else {
//     console.log("Invalid Marks!");
//     var obtMarks = +prompt("Enter your marks (Out of 100)")
//     var totalMarks = 100
//     var percentage = obtMarks / totalMarks * 100
//     if (percentage >= 80 && percentage <= 100) {
//         console.log("A+");
//      }else if (percentage >= 70 && percentage <= 79) {
//         console.log("A");
//     } else if (percentage >= 60 && percentage <= 69) {
//         console.log("B");
//     } else if (percentage >= 50 && percentage <= 59) {
//         console.log("C");
//     } else if (percentage >= 40 && percentage <= 49) {
//         console.log("D");
//     } else if (percentage >= 0 && percentage <= 39) {
//         console.log("Fail!");
//     } else {
//         console.log("Invalid Marks!");
//         var obtMarks = +prompt("Enter your marks (Out of 100)")
//     }
// }
// //_______________Qno 7
// var secretNumber = 5; 

// var userGuess = prompt("Guess the secret number (1-10):");

// if (Number(userGuess) === secretNumber) {
//     alert("Bingo! Correct answer");
// } else if (Number(userGuess) + 1 === secretNumber) {
//     alert("Close enough to the correct answer");
// } else {
//     alert("Try again!");
// }

//__________________________Qno 8

// var number = prompt("Enter a number:");

// if (Number(number) % 3 === 0) {
//     alert("The number is divisible by 3.");
// } else {
//     alert("The number is not divisible by 3.");
// }

//_________________________Qno 9
// var number = prompt("Enter a number:");

// if (number % 2 === 0) {
//     alert("The number is even.");
// } else {
//     alert("The number is odd.");
// }

//________________________Qno 10
var temp = prompt("Enter the temperature:");

if (temp > 40) {
    alert("It is too hot outside.");
} else if (temp > 30) {
    alert("The Weather today is Normal.");
} else if (temp > 20) {
    alert("Today’s Weather is cool.");
} else if (temp > 10) {
    alert("OMG! Today’s weather is so Cool.");
} else {
    alert("It's quite cold today.");
}

//______________________Qno 11
var num1 = prompt("Enter the first number:");
var num2 = prompt("Enter the second number:");
var operation = prompt("Enter operation (+, -, *, /, %):");

if (operation === "+") {
    alert("Result: " + (num1 * 1 + num2 * 1));
} else if (operation === "-") {
    alert("Result: " + (num1 - num2));
} else if (operation === "*") {
    alert("Result: " + (num1 * num2));
} else if (operation === "/") {
    alert("Result: " + (num1 / num2));
} else if (operation === "%") {
    alert("Result: " + (num1 % num2));
} else {
    alert("Invalid operation");
}

