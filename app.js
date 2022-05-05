const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobileMenu = document.querySelector(".header .nav-bar .nav-list ul");
const menuItems = document.querySelectorAll(".header .nav-bar .nav-list ul  a");
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", (event) => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 250) {
    header.style.backgroundColor = "#29323c";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });
});
