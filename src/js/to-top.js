// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("top-btn").style.display = "block";
    } else {
        document.getElementById("top-btn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// $(function() {

//     let nav = $("#nav");

//     $("[data-scroll]").on("click", function(event) {
//         event.preventDefault();

//         let elementId = $(this).data('scroll');
//         let elementOffset = $(elementId).offset().top;

//         nav.removeClass("show");

//         $("html, body").animate({
//             scrollTop: elementOffset - 70
//         });
//     });
// });

// $('.scrollto a').on('click', function() {

//     let href = $(this).attr('href');

//     $('html, body').animate({
//         scrollTop: $(href).offset().top
//     }, {
//         duration: 370,   // по умолчанию «400» 
//         easing: "linear" // по умолчанию «swing» 
//     });

//     return false;
// });