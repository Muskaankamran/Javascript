
//____________________CHAPTER 38-42________________________
//_______________________________________ANSWER 01
// function power(a,b) {
//     return a**b;
// }
// console.log (power(2,3));

//___________________________________________ANSWER 02


// function isLeapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//     return true;
//   } else {
//     return false;
//   }
// }
// let inputYear = parseInt(prompt("Enter a year:"));

// if (isLeapYear(inputYear)) {
//   console.log(inputYear + " is a leap year.");
// } else {
//   console.log(inputYear + " is not a leap year.");
// }

//_____________________________________________ANSWER 03


// function calculateSemiPerimeter(a, b, c) {
//   return (a + b + c) / 2;
// }

// function calculateArea(a, b, c) {
//   let S = calculateSemiPerimeter(a, b, c);

//   let area = (S * (S - a) * (S - b) * (S - c)) ** 0.5;
//   return area;
// }
// let a = 5, b = 6, c = 7;
// console.log("Area of triangle:", calculateArea(a, b, c).toFixed(2));
//_______________________________________________ANSWER 04
// function calculateAverage(s1, s2, s3) {
//   return (s1 + s2 + s3) / 3;
// }
// function calculatePercentage(s1, s2, s3) {
//   let totalMarks = 300; 
//   let obtainedMarks = s1 + s2 + s3;
//   return (obtainedMarks / totalMarks) * 100;
// }
// function mainFunction(s1, s2, s3) {
//   let avg = calculateAverage(s1, s2, s3);
//   let percent = calculatePercentage(s1, s2, s3);

//   console.log("Marks:", s1, s2, s3);
//   console.log("Average Marks:", avg.toFixed(2));
//   console.log("Percentage:", percent.toFixed(2) + "%");
// }

// mainFunction(75, 90, 78);

//________________________________________________ANSWER 05
// function customIndexOf(str, char) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       return i; 
//     }
//   }
//   return -1; 
// }
// console.log(customIndexOf("hello", "e"));
// console.log(customIndexOf("world", "r")); 

//___________________________________________________ANSWER 06

// function removeVowels(sentence) {
//   return sentence.replace(/[aeiouAEIOU]/g, '');
// }

// var sentence = "Hello World";
// console.log("Original:", sentence);
// console.log("Without Vowels:", removeVowels(sentence));
//___________________________________________________ANSWER 07

// function countConsecutiveVowelPairs(text) {
//   var count = 0;
//   function isVowel(char) {
//     switch(char.toLowerCase()) {
//       case 'a':
//       case 'e':
//       case 'i':
//       case 'o':
//       case 'u':
//         return true;
//       default:
//         return false;
//     }
//   }


//   for (var i = 0; i < text.length - 1; i++) {
//     if (isVowel(text[i]) && isVowel(text[i + 1])) {
//       count++;
//     }
//   }

//   return count;
// }
// var sentence = "Pleases read this application and give me gratuity";
// console.log("Number of consecutive vowel pairs:", countConsecutiveVowelPairs(sentence));

//___________________________________________________ANSWER 08
// function convertDistance(km) {
//   console.log(km * 1000 + " meters");
//   console.log(km * 3280.84 + " feet");
//   console.log(km * 39370.1 + " inches");
//   console.log(km * 100000 + " centimeters");
// }

// let distance = parseFloat(prompt("Enter distance between two cities in km:"));
// convertDistance(distance);



//___________________________________________________ANSWER 09

// function calculateOvertime(hours) {
//   if (hours > 40) {
//     return (hours - 40) * 12;
//   } else {
//     return 0;
//   }
// }

// var hoursWorked = parseInt(prompt("Enter total hours worked:"));
// var overtimePay = calculateOvertime(hoursWorked);

// console.log("Overtime pay is Rs. " + overtimePay);
//___________________________________________________ANSWER 10

function calculateNotes(amountHundreds) {
  let amount = amountHundreds * 100;

  let notes100 = Math.floor(amount / 100);
  amount = amount % 100;

  let notes50 = Math.floor(amount / 50);
  amount = amount % 50;

  let notes10 = Math.floor(amount / 10);

  console.log("100 Rs notes:", notes100);
  console.log("50 Rs notes:", notes50);
  console.log("10 Rs notes:", notes10);
}

let amount = parseInt(prompt("Enter amount in hundreds:"));
calculateNotes(amount);
