// script.js

// Toggle menu
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

// Scroll to top button
const toTopBtn = document.getElementById("toTopBtn");
window.onscroll = function () {
  if (toTopBtn) {
    toTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
  }
};
if (toTopBtn) {
  toTopBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Typed.js effect
if (document.getElementById("typed")) {
  const typed = new Typed("#typed", {
    strings: ["Full-Stack Developer", "Creative Coder", "Tech Enthusiast"],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
  });
}

// Init scroll animations
AOS.init();
