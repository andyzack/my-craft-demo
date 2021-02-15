const navToggle = document.querySelector(".js-toggle-button").parentNode;

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle("open");
});
