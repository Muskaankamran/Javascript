//_____Chap 12_______________________
//_____________________ANS 1
// var num = prompt("Enter a single character:");

// if (num.length !== 1) {
//     console.log("Please enter only one character.");
// } else {
//     if (num >= '0' && num <= '9') {
//         console.log("The input is a number.");
//     } else if (num >= 'A' && num <= 'Z') {
//         console.log("The input is an uppercase letter.");
//     } else if (num >= 'a' && num <= 'z') {
//         console.log("The input is a lowercase letter.");
//     } else {
//         console.log("The input is not a letter or number.");
//     }
// }
//____________________________ANS 2
// var num1 = prompt("Enter the first integer:");
// var num2 = prompt("Enter the second integer:");

// if (num1 > num2) {
//     console.log("The larger number is: " + num1);
// } else if (num2 > num1) {
//     console.log("The larger number is: " + num2);
// } else {
//     console.log("Both numbers are equal.");
// }
//___________________________ANS 3
//  var num = prompt("Enter a number:");

// if (num > 0) {
//     console.log("The number is positive.");
// } else if (num < 0) {
//     console.log("The number is negative.");
// } else {
//     console.log("The number is zero.");
// }
//____________________________ANS 4
// a.
// var correctPassword = "muskan123";

// // b. 
// var userPassword = prompt("Enter your password:");


// if (userPassword === "" || userPassword === null) {
//     console.log("Please enter your password.");
// } 
// // ii. Check if passwords match
// else if (userPassword === correctPassword) {
//     console.log("Correct! The password you entered matches the original password.");
// } 
// // If not matching
// else {
//     console.log("Incorrect password.");
// }
//____________________________ANS 5
// var greeting;
// var hour = 13;

// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

// console.log(greeting);
//____________________ANS 6
var time = prompt("Enter time in 24-hour format (e.g. 1900 for 7 PM):");

if (time >= 0 && time < 1200) {
    console.log("Good morning!");
} else if (time >= 1200 && time < 1700) {
    console.log("Good afternoon!");
} else if (time >= 1700 && time < 2100) {
    console.log("Good evening!");
} else if (time >= 2100 && time <= 2359) {
    console.log("Good night!");
} else {
    console.log("Invalid time. Please enter a value between 0000 and 2359.");
}


