// Alternar tema claro/escuro
const toggleBtn = document.getElementById("toggleTheme");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}

// Voltar ao topo
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (!backToTop) return;
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});
if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Menu hambúrguer
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// REVEAL: se ScrollReveal existir, usa ele e adiciona .revealed no afterReveal.
// Caso contrário, usa IntersectionObserver para aplicar .revealed à medida que as seções entram na viewport.
const revealSelector = ".reveal";

function addRevealed(el) {
  el.classList.add("revealed");
}

// Se ScrollReveal estiver disponível (carregado via CDN), usá-lo e still adicionar classe .revealed
if (typeof ScrollReveal !== "undefined") {
  ScrollReveal().reveal(revealSelector, {
    origin: "bottom",
    distance: "40px",
    duration: 700, // antes era 900, agora mais rápido
    easing: "ease",
    reset: false,
    interval: 80, // revela elementos com intervalo menor
    afterReveal: function (el) {
      addRevealed(el);
    }
  });

} else {
  // Fallback com IntersectionObserver
  const els = document.querySelectorAll(revealSelector);
  if ("IntersectionObserver" in window && els.length) {
    const obs = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          addRevealed(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(el => obs.observe(el));
  } else {
    // Se não há IntersectionObserver (navegadores muito antigos), revela tudo
    document.querySelectorAll(revealSelector).forEach(addRevealed);
  }
}
