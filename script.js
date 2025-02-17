// Navigation bar
const menuButton = document.querySelector(".nav__mobile-btn");
const navMenu = document.querySelector(".nav__menu");
const navLinks = document.querySelectorAll("nav__link");

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navMenu.addEventListener("click", () => {
  menuButton.classList.remove("active");
  navMenu.classList.remove("active");
});

document.addEventListener("click", (e) => {
  if (!menuButton.contains(e.target) && !navMenu.contains(e.target)) {
    menuButton.classList.remove("active");
    navMenu.classList.remove("active");
  }
});