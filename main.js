/* hamburger menu */
  function myFunction() {
    var x = document.getElementById('nav-ul');
    if (x.style.display === 'block') {
      x.style.display = 'none';
    } else {
      x.style.display = 'block';
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