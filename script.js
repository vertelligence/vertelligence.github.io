// Mobile nav toggle
const toggle = document.querySelector(".vt-header__toggle");
const nav = document.getElementById("site-nav");

toggle.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!open));
  nav.classList.toggle("is-open", !open);
});

// Close the menu after choosing a section link
nav.addEventListener("click", (e) => {
  if (e.target.matches('a[href^="#"]')) {
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  }
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
