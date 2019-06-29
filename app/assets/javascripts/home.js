$(document).ready(function() {
  $('#js-content').load('/about');

  $('#js-navigation a').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $("#js-content").load(e.target.href);
  })
});
