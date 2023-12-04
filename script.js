const buttons = document.querySelectorAll('.btn-note');
var selectedValue = null;

buttons.forEach(function (button) {
   button.addEventListener('click', function () {

      selectedValue = this.value;

   })
});


function SendNote() {

   let span = document.getElementById('user-note');
   let main = document.getElementById("main-component");
   let component = document.getElementById('component-active')

   if (component.style.display = "none") {
      component.style.display = "flex";
      main.style.display = "none";
      if (selectedValue !== null) {
         span.innerHTML = "You selected " + selectedValue + " of 5"
      } else {
         span.innerHTML = "You selected 0 of 5"
      }
   }

}
