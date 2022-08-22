
    const history = document.querySelectorAll("[data-history]");
    history.forEach((more) => {
        const readMoreBtn = document.querySelector("[data-read-more]");
        const readCloseBtn = document.querySelector("[data-read-close]");
        
        readMoreBtn.addEventListener("click", toggleModal);
        readCloseBtn.addEventListener("click", toggleModal);

        function toggleModal() {
          more.classList.toggle("is-more");
        }
});  




  