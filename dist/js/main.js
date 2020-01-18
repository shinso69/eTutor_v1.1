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

// Hide brading on scroll down & show on scroll up
const branding = document.querySelector("#branding");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    branding.classList.add("hide");
  } else {
    branding.classList.remove("hide");
  }
});
