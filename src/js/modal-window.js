(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-location-open]"),
      closeModalBtn: document.querySelector("[data-location-close]"),
      modal: document.querySelector("[data-location]"),
      body: document.querySelector("[data-body]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      refs.body.classList.toggle("no-scroll");
    }
  })();

(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-franchise-open]"),
      closeModalBtn: document.querySelector("[data-franchise-close]"),
      modal: document.querySelector("[data-franchise]"),
      body: document.querySelector("[data-body]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      refs.body.classList.toggle("no-scroll");
    }
  })();

(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-buy-open]"),
      closeModalBtn: document.querySelector("[data-buy-close]"),
      modal: document.querySelector("[data-buy]"),
      body: document.querySelector("[data-body]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      refs.body.classList.toggle("no-scroll");
    }
  })();