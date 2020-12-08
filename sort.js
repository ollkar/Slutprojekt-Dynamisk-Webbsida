/* sort by lista */
function showSortList() {
    document.getElementById("sortBy").classList.toggle("show");
  }
  
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
 

  