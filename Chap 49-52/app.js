// ________________Answer01____________
// const form = document.getElementById('signupForm');
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     form.reset();
//______________ANSWER02__________________

// function expandText() {
//     var shortSent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
//     var text = " Lorem ipsum dolor sit amet consectetur, adipisicing elit.Vel voluptatem, magnam cum reprehenderit mollitia placeat. Impedit voluptatibus iure laborum eos dolor, et ullam molestias debitis itaque quas eligendi reiciendis architecto!"
//   var para = document.getElementById("para")
//   var link = document.getElementById("link")
 
//     if(link.innerHTML==="See more..."){
//         link.innerHTML="See less.."
//         para.innerHTML = text
//     }else{
//         link.innerHTML = "See more..."
//         para.innerHTML = shortSent
//     }

    
// }


    //____________ANSWER03________________

    function deleteRow(button) {
        var row = button.closest('tr');  
        row.remove();
      }
      function editRow(button){
     
      }
  

