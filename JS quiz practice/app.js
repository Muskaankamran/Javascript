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


let randomNum = Math.floor(Math.random() * 10 + 1);
console.log(randomNum);
