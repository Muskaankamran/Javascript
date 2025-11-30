//ANSWER 01
// var itemsArray = [ 
//     { name: "juice", price: 50, quantity: 3 }, 
//     { name: "cookie", price: 30, quantity: 9 }, 
//     { name: "shirt", price: 880, quantity: 1 }, 
//     { name: "pen", price: 100, quantity: 2 }
// ];

// var grandTotal = 0;

// for (var i = 0; i < itemsArray.length; i++) {
//     var item = itemsArray[i];
//     var  total = item.price * item.quantity;

//     console.log(item.name + " total price = " + total);

//     grandTotal += total;
// }
// console.log("Total price of all items = " + grandTotal);

//Answer 02
// var user = {
//     name: "Ali",
//     email: "ali@example.com",
//     password: "12345",
//     age: 25,
//     gender: "male",
//     city: "Karachi",
//     country: "Pakistan"
// };

// console.log(user.hasOwnProperty("age"));       //exist
// console.log(user.hasOwnProperty("country"));   //exist

// console.log(user.hasOwnProperty("firstName")); //not exist
// console.log(user.hasOwnProperty("lastName"));  //not exist
//Answer 03
// function Student(name, age, gender, grade) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.grade = grade;
// }
// var student1 = new Student("Ali", 20, "Male", "A");
// var student2 = new Student("Sara", 22, "Female", "B");
// var student3 = new Student("John", 19, "Male", "A+");
// var student4 = new Student("Ayesha", 21, "Female", "A");
// console.log(student1);
// console.log(student2);
// console.log(student3);
// console.log(student4);
//Answer 04
function Population(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}


function saveRecord() {
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var education = document.getElementById("education").value;
    var profession = document.getElementById("profession").value;
    var genderRadio = document.getElementsByName("gender");
    var gender = "";
    for (var i = 0; i < genderRadio.length; i++) {
        if (genderRadio[i].checked) {
            gender = genderRadio[i].value;
        }
    }

    if (gender === "") {
        alert("Please select gender!");
        return;
    }
    var person = new Population(name, gender, address, education, profession);
    var records = JSON.parse(localStorage.getItem("populationRecords")) || [];
    records.push(person);
    localStorage.setItem("populationRecords", JSON.stringify(records));
    alert("Record saved!");
    displayRecords();
}
function displayRecords() {
    var records = JSON.parse(localStorage.getItem("populationRecords")) || [];
    var output = "";

    for (var i = 0; i < records.length; i++) {
        output += `
            <p>
            <strong>Name:</strong> ${records[i].name} <br>
            <strong>Gender:</strong> ${records[i].gender} <br>
            <strong>Address:</strong> ${records[i].address} <br>
            <strong>Education:</strong> ${records[i].education} <br>
            <strong>Profession:</strong> ${records[i].profession}
            </p><hr>
        `;
    }

    document.getElementById("records").innerHTML = output;
}
displayRecords();

