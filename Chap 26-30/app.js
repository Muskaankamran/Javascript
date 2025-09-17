//________CHAPTER 26-30________________________


//_____________________________________QUESTION NO 1
// var userInput = prompt("Give a positive integer");
// var userInt = Number(userInput); // convert to number

// if (userInt >= 0) {
//   document.write("Original: " + userInt + "<br>");
//   document.write("Math.round: " + Math.round(userInt) + "<br>");
//   document.write("Math.ceil: " + Math.ceil(userInt) + "<br>");
//   document.write("Math.floor: " + Math.floor(userInt) + "<br>");
// } else {
//   alert("Please enter a positive number.");
// }

//__________________________________QUESTION NO 2
// var userInput = prompt("Give a negative integer");
// var userInt = Number(userInput); // convert to number

// if (userInt <= 0) {
//   document.write("Original: " + userInt + "<br>");
//   document.write("Math.round: " + Math.round(userInt) + "<br>");
//   document.write("Math.ceil: " + Math.ceil(userInt) + "<br>");
//   document.write("Math.floor: " + Math.floor(userInt) + "<br>");
// } else {
//   alert("Please enter a negative number.");
// }

//______________________________________________QUESTION NO 3
// var abs = +prompt("Enter a number:")
// if(abs<0){
//     console.log("Absoulte of ",abs ," is ",-abs); 
// }else{
//     console.log("Absoulte of ",abs ," is ",abs); 
// }

//_____________________________________________QUESTION NO 4
// var diceNum =prompt("Enter dice number: ")
// var randomNumber = Math.random() *6;
// console.log("The value of the dice is: "+ randomNumber);


//________________________________________________QUESTION NO 5
// var result = Math.random() < 0.5 ? "Heads" : "Tails";
// document.write(result);


//_________________________________________________QUESTION NO 6

// var randomNumber = Math.floor(Math.random() * 100) + 1;
// document.write("random number between 1 and 100: " + randomNumber);


//__________________________________________________QUESTION NO 7

//____________________________________________________QUESTION NO 8

var secretNumber = Math.floor(Math.random() * 10) + 1;

var userGuess = prompt("Guess the secret number between 1 and 10:");

userGuess = parseInt(userGuess);

if (userGuess === secretNumber) {
  alert("Congratulations! You guessed the secret number.");
} else {
  alert("Sorry, the secret number was " + secretNumber + ". Try again!");
}

