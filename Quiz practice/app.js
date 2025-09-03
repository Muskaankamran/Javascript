var tenQuestion= [
"What is the correct way to declare a variable in JavaScript? " ,
"How do you assign the value 'Hello' to a variable named greeting? " ,
"Which symbol is used to write a comment in JavaScript? " ,
 "What is the correct way to display 'Welcome!' in an alert box?" ,
 "How do you add a line break in an alert box message? " ,
   "What will this code display ? <br/>  alert('2' + '2' ) ; " , 
   "Which keyword is used to show a message in the browser’s console? " ,
   "a legal variable name? " ,
   "What does this code do?  var myName  <br/> = 'Ali';  alert(myName); " ,
   "Which operator is used for addition in JavaScript? "
]

var tenAnswer= [
    "var userName; " ,
    "greeting = 'Hello'; " ,
    "// This is a comment" ,
    "alert('Welcome!'); " ,
    "alert('Hello\nWorld!'); " ,
    "22" ,
    "console.log('Message'); " ,
    "_userName" ,
    "var myName = 'Ali'; alert(myName); " ,
     "+"
];
var score = 0
for(var i = 0; i<tenQuestion.length;i++){
  var userAns= prompt(tenQuestion[i])
  if (userAns && tenAnswer.lowercase()===tenAnswer) {
    alert("Your answer is correct ")
    score++
  }
  else{
     console.log(tenQuestion[i], tenAnswer[i]);
    alert("Your answer is incorrect! the correct ans was" + tenAnswer[i] )
  }
}
console.log(score);

