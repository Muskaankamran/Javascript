// function toTitleCase(str) {
//   let words = str.toLowerCase().split(" ");
//   for (let i = 0; i < words.length; i++) {
//     let word = words[i];
//     if (word.length > 0) {
//       words[i] = word[0].toUpperCase() + word.slice(1);
//     }
//   }
//   return words.join(" ");
// }

// Example usage:
// console.log(toTitleCase("javaScript is FUN"));



// let str = prompt("Enter a sentence:");
// let words = str.toLowerCase().split(" ");

// for (let i = 0; i < words.length; i++) {
//   if (words[i].length > 0) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//   }
// }

// let titleCaseStr = words.join(" ");
// alert(titleCaseStr); // or use console.log(titleCaseStr);





// var str = prompt("Enter some text");
//  var numChars = str.length;
//  for (var i = 0; i < numChars; i++) {
//  if (str.slice(i, i + 2) === " ") {
//  }
//  alert("No double spaces");
//  let str = "hello";
// console.log(str.indexOf("e")); // 1
// console.log(str.indexOf("l")); // 2 (first "l")
// console.log(str.indexOf("z")); // -1 (not found)



// let str = "hello";
// console.log(str.charAt(1)); // "e"
// console.log(str.charAt(4)); // "o"
// console.log(str.charAt(10)); // "" (empty string)


// var text = "muskan";
//  text = text.replace(/muskan/g , "Umaima");
// console.log(text);


// let randomNum = Math.floor(Math.random() * 10 + 1);
// console.log(randomNum);



// var profit = 200 - '150';
// console.log(profit);





// var profit = "200" / 150;
// console.log(profit);


// var number = 1000000;
// var formatted = number.toLocaleString();

// console.log(formatted); // "1,000,000"





// var rightNow = new Date();
// console.log(rightNow);

// var rightNow= new Date()
// var theDay = rightNow.getDay()
// console.log(theDay);


// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//   var now = new Date();
//   var theDay;
//   now.getDay();
//   var nameOfToday = dayNames[theDay]
//  console.log(nameOfToday);
 

//   var d = new Date();
//  var currentMonth = d.getMonth()

//  var dayOfMonth = d.getDate()
 


//   var currYr = d.getFullYear()
 
//  console.log(currYr);



//   var d = new Date();
//  d.setFullYear(2001);
// console.log(d);


// var xYZ=new Date();
// xYZ.setMonth(5);
// console.log(xYZ);




//  function tellTime() {
//     var now = new Date();
//    var theHr = now.getHours();
//    var theMin = now.getMinutes();
//  alert("Current time: "+ theHr + ":" + theMin);
//   }
//   tellTime()








// function calcTot(merchTot) { 
// var orderTot;  
// if (merchTot >= 100) {     
//     orderTot= merchTot; 
// }
//  else if (merchTot < 50.01) {
//        orderTot = merchTot + 5;
// }
//  else {
//     orderTot= merchTot + 5 + (.03 * (merchTot - 50));
//    }
//    return orderTot;
//  }


//  alert(calcTot())
   
// var globalValue = "I'm global!";

// function sayHello() {
//     console.log(globalValue); // Accessible here
// }

// sayHello(); // Output: I'm global!
function greet() {
    var localValue = "I'm local!";
    // console.log(localValue); // Accessible here
}

greet();
console.log(localValue); // ❌ Error: localValue is not defined
