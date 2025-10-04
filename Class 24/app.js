//SWITCH///

// var day=prompt("Enter a day: ");
// switch(day){
//     case "sun" :
//  alert("Its a holiday! ");
//   break;
//   case "sat" : 
//   alert("Its a weekend! ");
//   break;
//   case "fri" : 
//   alert("Its a half day! ");
//   break;
//   default:
//     alert("Its a busy day! ");
// }

// var num1 = parseInt(prompt("Emter num1: "));
// var num2 = parseInt(prompt("Emter num2: "));
// var operator =parseInt(prompt("Emter operator: "));
// switch(operator){
//     case "+" :
//         alert(num1 + num2);
//         break;
//         case "-" :
//             alert(num1 - num2)
//             break;
//             default :alert("error");
        
// }
var num1 = parseInt(prompt("Enter num1: "));
var num2 = parseInt(prompt("Enter num2: "));
var operator = prompt("Enter operator (+ or -):");

switch(operator){
    case "+":
        alert(num1 + num2);
        break;
    case "-":
        alert(num1 - num2);
        break;
    default:
        alert("Error: Invalid operator");
}


