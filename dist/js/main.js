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

// Cta Button functionality -scroll to contact form
const ctaButton = document.querySelector("#cta_button");
const contactForm = document.querySelector("#contact");

ctaButton.addEventListener("click", () => {
  contactForm.scrollIntoView();
});

// Section elements slide into view

(() => {
  let sections;
  let windowHeight;

  init = () => {
    sections = document.querySelectorAll(".hidden");
    windowHeight = window.innerHeight;
  };

  checkPosition = () => {
    sections.forEach(section => {
      let positionFromTop = section.getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        section.classList.add("section_show");
        section.classList.remove("hidden");
      } else {
        section.classList.add("hidden");
        section.classList.remove("section_show");
      }
    });
  };

  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", init);

  init();
  checkPosition();
})();

// Form Validation
const nameField = document.querySelector("#name");
const emailField = document.querySelector("#email");
const msgField = document.querySelector("#msg");
const formBtn = document.querySelector(".btn_form");
const regEx = /\S+@\S+\.\S+/;

validateForm = () => {
  if (
    nameField.value.trim() !== "" &&
    regEx.test(emailField.value) &&
    msgField.value.trim() !== ""
  ) {
    formBtn.disabled = false;
    msgField.classList.add("has_content");
  } else {
    formBtn.disabled = true;
    msgField.classList.remove("has_content");
    emailField.style.color = "transparent";
  }
};

msgField.addEventListener("focus", validateForm);
nameField.addEventListener("focus", validateForm);
emailField.addEventListener("focus", validateForm);
msgField.addEventListener("click", validateForm);
nameField.addEventListener("click", validateForm);
emailField.addEventListener("click", validateForm);
msgField.addEventListener("focusout", validateForm);
nameField.addEventListener("focusout", validateForm);
emailField.addEventListener("focusout", validateForm);
msgField.addEventListener("mouseleave", validateForm);
nameField.addEventListener("mouseleave", validateForm);
emailField.addEventListener("mouseleave", validateForm);
