

// Menu hambúrguer
const hamburger = document.querySelector("#hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    const isActive = navLinks.classList.toggle("active");
    hamburger.setAttribute("aria-expanded", isActive);
  });

  // Fecha o menu no mobile ao clicar em um link
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      hamburger.setAttribute("aria-expanded", false);
    });
  });
}

// REVEAL
const revealSelector = ".reveal";

function addRevealed(el) {
  el.classList.add("revealed");
}

if (typeof ScrollReveal !== "undefined") {
  ScrollReveal().reveal(revealSelector, {
    origin: "bottom",
    distance: "40px",
    duration: 700,
    easing: "ease",
    reset: false,
    interval: 80,
    afterReveal: function (el) {
      addRevealed(el);
    }
  });
} else {
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
    document.querySelectorAll(revealSelector).forEach(addRevealed);
  }
}

// Texto flutuante do WhatsApp a cada 3 segundos
const whatsappText = document.querySelector(".whatsapp-text");
if (whatsappText) {
  setInterval(() => {
    whatsappText.style.opacity = 1;
    setTimeout(() => {
      whatsappText.style.opacity = 0;
    }, 2000);
  }, 3000);
}
