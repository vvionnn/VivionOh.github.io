// main.js
// Small helpers: year + smooth scrolling that accounts for fixed navbar height

document.getElementById("year").textContent = new Date().getFullYear();

// Offset anchor jump for fixed navbar
const NAV_OFFSET = 84;

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", (e) => {
    const href = a.getAttribute("href");
    if (!href || href === "#") return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.pageYOffset - NAV_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  });
});
