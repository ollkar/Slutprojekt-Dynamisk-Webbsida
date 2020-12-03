/* hamburger menu */
  function myFunction() {
    var x = document.getElementById('nav-ul');
    if (x.style.display === 'block') {
      x.style.display = 'none';
    } else {
      x.style.display = 'block';
    }
  }

/* sort by lista */
  function showSortList() {
    document.getElementById("sortBy").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.sort-button')) {
      var dropdowns = document.getElementsByClassName("sort-list");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

/* form javascript */
/*
let registerForm = document.getElementById("register-form");

registerForm.addEventListener("submit", function(e) {

e.preventDefault();
let inputEmail = document.getElementById("inputemail");

console.log(inputemail.value)
let errorMessages = "";
if (inputemail.value ==="") {
  errorMessages += "Email is required";
}

alert("Tack!");

});
*/