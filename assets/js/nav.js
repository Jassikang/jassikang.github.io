// Mobile menu toggle
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

// Dropdown toggle
document.querySelectorAll(".dropdown").forEach((dd) => {
  const btn = dd.querySelector(".dropdown-toggle");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const isOpen = dd.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(isOpen));
  });
});

// Footer year
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
