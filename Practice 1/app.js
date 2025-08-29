//  var rows = +prompt("Enter the number of rows:")
// var cols = +prompt("Enter the number of cols:")
// var char = prompt("Enter the character:")

// for(var i =1; i<=rows; i++){
//    for(var j=1; j<=cols; j++){
//      document.write(char)
//    }
//     document.write("<br/>")
// }

var rows = +prompt("Enter the no of rows ")
var cols = +prompt("Enter no of columns")
var char = 
for(var i=1; i<=rows; i++){
    for(var k=1; k<=rows-i; k++){
        document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")
    }

    for(var j=1; j<=i; j++){
        document.write(cols)
    for(var l=2; l<=i; l++){
        document.write("*")
    }
    
    document.write("<br>")
}

