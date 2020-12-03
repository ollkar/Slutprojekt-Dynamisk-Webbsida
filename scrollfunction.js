window.onscroll = function () {scrollFunction()};

function scrollFunction() {
    
    var topButton = document.getElementById("topbutton");

  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
