

  (()=> {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const menuBtnClose = document.querySelector("[data-close-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const headerBtn = document.querySelector("[data-header-btn]");
  const bodyScrollLock = document.querySelector("[data-body]");
  menuBtnRef.addEventListener("click", () => {
    const expanded=
     menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    menuBtnRef.classList.add("is-open");
    menuBtnRef.setAttribute("artia-expanded", !expanded);
    mobileMenuRef.classList.add("is-open");
    headerBtn.classList.add("is-open");
    bodyScrollLock.classList.add("no-scroll");
  });
  menuBtnClose.addEventListener("click", () => {
    const expanded=
     menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    menuBtnRef.classList.remove("is-open");
    menuBtnRef.setAttribute("artia-expanded", !expanded);
    mobileMenuRef.classList.remove("is-open");
    headerBtn.classList.remove("is-open");
    bodyScrollLock.classList.remove("no-scroll");
  });

 })();      
 
//  $(function() {


//   /* Fixed Header */
// let header = $("#header");
// let intro = $("#intro");
// let introH = intro.innerHeight();
// let scrollPos = $(window).scrollTop();
// let nav = $("#nav");
// let navToggle = $("#navToggle");

// checkScroll(scrollPos, introH);

// $(window).on("scroll resize", function() {
// introH = intro.innerHeight();
// scrollPos = $(this).scrollTop();

// checkScroll(scrollPos, introH);
// });

// function checkScroll(scrollPos, introH) {
// if( scrollPos > introH ) {
// header.addClass("fixed");
// } else {
// header.removeClass("fixed");
// }
// }


//    /* Smooth scroll */

// $("[data-scroll]").on("click", function(event) {
// event.preventDefault();

// let elementId = $(this).data('scroll');
// let elementOffset = $(elementId).offset().top;

// nav.removeClass("show");

// $("html, body").animate({
// scrollTop: elementOffset - 70
// });
// });


//   /* Nav Toggle */



// $("#navToggle").on("click", function(event) {
// event.preventDefault();

// nav.toggleClass("show");

// });



// });