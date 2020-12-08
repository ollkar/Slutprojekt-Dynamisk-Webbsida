/* scroll function */
window.onscroll = function () {scrollFunction()};

function scrollFunction() {
    
    var topButton = document.getElementById("topbutton");

  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
