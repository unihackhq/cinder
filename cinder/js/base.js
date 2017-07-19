
/* Highlight */
$( document ).ready(function() {
    hljs.initHighlightingOnLoad();
    $('table').addClass('table table-striped table-hover');
});

$('body').scrollspy({
    target: '.bs-sidebar',
});

$(document).on('click', "[data-toggle='rst-current-version']", function() {
  $("[data-toggle='rst-versions']").toggleClass("shift-up");
});

/* Prevent disabled links from causing a page reload */
$("li.disabled a").click(function() {
    event.preventDefault();
});
