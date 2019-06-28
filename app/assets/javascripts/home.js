$(document).ready(function() {
  // $('#js-content').load('/');

  $('#js-navigation a').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $("#js-content").load(e.target.href);
  })
});
