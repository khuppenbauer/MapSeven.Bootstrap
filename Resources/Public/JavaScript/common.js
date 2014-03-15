$(".nav li.dropdown a span").click(function(e) {
    e.preventDefault();
    $(this).closest("li.dropdown").toggleClass("open");
});