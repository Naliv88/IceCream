(() => {
    const refs = {
      openCardBtn: document.querySelector("[data-card1-open]"),
      closeCardBtn: document.querySelector("[data-card1-close]"),
      cardFront: document.querySelector("[data-card1-front]"),
      cardBack: document.querySelector("[data-card1-back]"),
    };
  
    refs.openCardBtn.addEventListener("click", toggleModal);
    refs.closeCardBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.cardFront.classList.toggle("is-rotate");
      refs.cardBack.classList.toggle("is-rotate");
    }
  })();

(() => {
    const refs = {
      openCardBtn: document.querySelector("[data-card2-open]"),
      closeCardBtn: document.querySelector("[data-card2-close]"),
      cardFront: document.querySelector("[data-card2-front]"),
      cardBack: document.querySelector("[data-card2-back]"),
    };
  
    refs.openCardBtn.addEventListener("click", toggleModal);
    refs.closeCardBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.cardFront.classList.toggle("is-rotate");
      refs.cardBack.classList.toggle("is-rotate");
    }
  })();

(() => {
    const refs = {
      openCardBtn: document.querySelector("[data-card3-open]"),
      closeCardBtn: document.querySelector("[data-card3-close]"),
      cardFront: document.querySelector("[data-card3-front]"),
      cardBack: document.querySelector("[data-card3-back]"),
    };
  
    refs.openCardBtn.addEventListener("click", toggleModal);
    refs.closeCardBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
        refs.cardFront.classList.toggle("is-rotate");
        refs.cardBack.classList.toggle("is-rotate");
    }
  })();