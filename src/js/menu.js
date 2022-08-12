

  (()=> {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const menuBtnClose = document.querySelector("[data-close-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const headerBtn = document.querySelector("[data-header-btn]");
  const bodyScrollLock = document.querySelector("[data-body]");
  const clickLinkNav1 = document.querySelector("[data-link-1]");
  const clickLinkNav2 = document.querySelector("[data-link-2]");
  const clickLinkNav3 = document.querySelector("[data-link-3]");
  const clickLinkNav4 = document.querySelector("[data-link-4]");
  const clickLinkNav5 = document.querySelector("[data-link-5]");
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
  clickLinkNav1.addEventListener("click", () => {
    const expanded=
     menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    menuBtnRef.classList.remove("is-open");
    menuBtnRef.setAttribute("artia-expanded", !expanded);
    mobileMenuRef.classList.remove("is-open");
    headerBtn.classList.remove("is-open");
    bodyScrollLock.classList.remove("no-scroll");
  });
  clickLinkNav2.addEventListener("click", () => {
    const expanded=
     menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    menuBtnRef.classList.remove("is-open");
    menuBtnRef.setAttribute("artia-expanded", !expanded);
    mobileMenuRef.classList.remove("is-open");
    headerBtn.classList.remove("is-open");
    bodyScrollLock.classList.remove("no-scroll");
  });
  clickLinkNav3.addEventListener("click", () => {
    const expanded=
     menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    menuBtnRef.classList.remove("is-open");
    menuBtnRef.setAttribute("artia-expanded", !expanded);
    mobileMenuRef.classList.remove("is-open");
    headerBtn.classList.remove("is-open");
    bodyScrollLock.classList.remove("no-scroll");
  });
  clickLinkNav4.addEventListener("click", () => {
    const expanded=
     menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    menuBtnRef.classList.remove("is-open");
    menuBtnRef.setAttribute("artia-expanded", !expanded);
    mobileMenuRef.classList.remove("is-open");
    headerBtn.classList.remove("is-open");
    bodyScrollLock.classList.remove("no-scroll");
  });
  clickLinkNav5.addEventListener("click", () => {
    const expanded=
     menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    menuBtnRef.classList.remove("is-open");
    menuBtnRef.setAttribute("artia-expanded", !expanded);
    mobileMenuRef.classList.remove("is-open");
    headerBtn.classList.remove("is-open");
    bodyScrollLock.classList.remove("no-scroll");
  });
  

 })();      
 
 $(document).ready(function(){
	$("#menu").on("click","a", function (event) {
    
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});

$(function() {

let nav = $("#nav");
let navToggle = $("#navToggle");

   /* Smooth scroll */

$("[data-scroll]").on("click", function(event) {
event.preventDefault();

let elementId = $(this).data('scroll');
let elementOffset = $(elementId).offset().top;

nav.removeClass("show");

$("html, body").animate({
scrollTop: elementOffset - 70
});
});

  /* Nav Toggle */

$("#navToggle").on("click", function(event) {
event.preventDefault();

nav.toggleClass("show");

});

});

$(function() {

let nav = $("#hero");
let navToggle = $("#navToggle");

   /* Smooth scroll */

$("[data-scroll]").on("click", function(event) {
event.preventDefault();

let elementId = $(this).data('scroll');
let elementOffset = $(elementId).offset().top;

nav.removeClass("show");

$("html, body").animate({
scrollTop: elementOffset - 70
});
});

  /* Nav Toggle */

$("#navToggle").on("click", function(event) {
event.preventDefault();

nav.toggleClass("show");

});

});