// script.js

console.log("Portfólio do Arthur carregado!");
console.log("%cBem-vindo ao portfólio do Arthur! 🚀", "color: #00ffff; font-weight: bold; font-size: 16px;");

// Tema
const toggleTheme = document.getElementById("toggleTheme");
if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark-mode");
}
toggleTheme.onclick = () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode"));
};

// Botão voltar ao topo
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Scroll Reveal
ScrollReveal().reveal('.repo-card', {
  origin: 'bottom',
  distance: '50px',
  duration: 800,
  easing: 'ease-in-out',
  interval: 200
});

// Scroll suave para âncoras
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
