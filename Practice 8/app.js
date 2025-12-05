// function Employee(name, email, rollno) {
//   this.name = name;
//   this.email = email;
//   this.rollno = rollno;
// }
// Employee.prototype.country = "Pakistan";
// // console.log(Employee);
// var developer = new Employee("muskan", "muskan@gmail.com", 423838);
// var DM = new Employee("sara", "sara123@gmail.com", 421849);
// console.log(developer);
// console.log(DM);
// var newWin = window.open("","","width=417;height=489;top=22;left=19");
// var displayData = "<h1>Hello pakistani</h1>"
// newWin.document.write(displayData);

// aler("hello");

// try {
//   aler("hello");
// } catch (error) {
//   console.log(error);
// }

// console.log(alert);

//   try {
//     var greeting = "Hello world!";
//     aler(greeting);
//   } catch (err) {
//     alert(err);
//   }

// console.log(greeting);
var button = document.getElementById("btn");
button.onclick = sayHELLO;
function sayHELLO() {
Swal.fire("hello everyone!");
};