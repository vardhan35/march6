const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector("nav");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
})