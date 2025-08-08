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
 
//___________Qno 3
var color = prompt("Enter signal color:");

if (color === "Red") {
    document.write("Must Stop");
} 
else if (color === "Yellow") {
    document.write("Ready to move");
} 
else if (color === "Green") {
    document.write("Move now");
} 
else {
    document.write("Invalid signal color");
}

//______________Qno 4
var fuel = prompt("Enter remaining fuel in your car (in litres):");
if (fuel <0.25) {
    alert("Please refill the fuel in your car");
} 
//__________________Qno 5
var a = 4;
if (++a === 5){
  alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
  alert("given condition for variable b is true");
}
var c = 12;

if (c++ === 13){
  alert("condition 1 is true");
}
// c is 12 when compared, so false. Then c becomes 13.

if (c === 13){
  alert("condition 2 is true");
}
// c is now 13 → true

if (++c < 14){
  alert("condition 3 is true");
}
// ++c means c becomes 14, 14 < 14? false

if (c === 14){
  alert("condition 4 is true");
}
// c is 14 → true
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost){
  alert("The cost equals");
}
if (true){
  alert("True");
}

if (false){
  alert("False")
}
if("car" < "cat"){
  alert("car is smaller than cat");
}
