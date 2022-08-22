// (() => {
//     const refs = {
//       readMoreBtn: document.querySelector("[data-read-more]"),
//       readCloseBtn: document.querySelector("[data-read-close]"),
//       history: document.querySelector("[data-history]"),
//     };
  
//     refs.readMoreBtn.addEventListener("click", toggleModal);
//     refs.readCloseBtn.addEventListener("click", toggleModal);

  
//     function toggleModal() {
//       refs.history.classList.toggle("is-more");
//     }
//   })();
// (() => {
    const history = document.querySelector("[data-history]");
    const readMoreBtn = document.querySelector("[data-read-more]");
    const readCloseBtn = document.querySelector("[data-read-close]");
    
    history.forEach((more) => {

        readMoreBtn.addEventListener("click", toggleModal);
        readCloseBtn.addEventListener("click", toggleModal);

        function toggleModal() {
          more.classList.toggle("is-more");
        }
});  
// })();



  