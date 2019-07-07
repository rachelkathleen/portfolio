
$(document).ready(function() {
  $('#js-content').load('/about');

  $('#js-navigation a').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $("#js-content").load(e.target.href);
  })
});


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.button')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
