// Change Menu Icon into an "X", Show Nav & Hide Nav after a link click;
const menuIcon = document.querySelector("#menu_icon");
const mainNav = document.querySelector("#main_nav");
const navLinks = document.querySelectorAll("li");

menuIcon.addEventListener("click", () => {
  mainNav.classList.toggle("nav_show");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("nav_show");
  });
});
