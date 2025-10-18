//__________EVENTS___________________
//_____________________________________QNO1
function message(){
    alert('You clicked the link! ');
}
//____________________________________QNO 2
 function showAlert(mobileName){
Swal.fire("You clicked on " + mobileName);
 }


 //____________________________________Qno3
        function deleteRow(button) {
      const row = button.closest('tr');  
      row.remove();
    }

    //__________________________________Qno4
  function run(e){
    e.src = 'https://i.pinimg.com/474x/c3/b8/ba/c3b8badb9ac691cae0772a001f47f154.jpg';
  }

  function change(e){
    e.src = 'https://www.photofunky.net/output/image/d/d/d/2/ddd28c/photofunky.gif';
  }
 //_________________________________Qno5
 var count = 0;

    function updateCounter() {
      document.getElementById('counter').textContent = count;
    }
    
    function increaseCounter() {
      count++;
      updateCounter();
    }

    function decreaseCounter() {
      count--;
      updateCounter();
    }