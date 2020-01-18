// Change Menu Icon into an "X"
const menuIcon = document.querySelector("#menu_icon");
const mainNav = document.querySelector("#main_nav");

menuIcon.addEventListener("click", () => {
  mainNav.classList.toggle("nav_show");
});
