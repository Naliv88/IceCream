

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