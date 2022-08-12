// When the user scrolls down 20px from the top of the document, show the button

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("top-btn").style.display = "flex";
    } else {
        document.getElementById("top-btn").style.display = "none";
    }
}
    
$(function() {

    $("[data-scroll]").on("click", function(event) {
    event.preventDefault();
    
    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;
    
    $("html, body").animate({
    scrollTop: elementOffset - 70
    });
    });

});