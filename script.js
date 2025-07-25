// script.js

// Alternar tema claro/escuro
document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Botão voltar ao topo
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ScrollReveal para animações
ScrollReveal().reveal(".reveal", {
  origin: "bottom",
  distance: "40px",
  duration: 1000,
  easing: "ease",
  reset: false
});

// Menu hambúrguer toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});