// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("show");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

// Close menu when clicking a link (mobile)
navLinks.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    navLinks.classList.remove("show");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Draggable flowers (works mouse + touch)
function makeDraggable(el) {
  let dragging = false;
  let offsetX = 0;
  let offsetY = 0;

  const start = (e) => {
    dragging = true;
    const p = getPoint(e);
    const rect = el.getBoundingClientRect();
    offsetX = p.x - rect.left;
    offsetY = p.y - rect.top;
    el.setPointerCapture?.(e.pointerId);
  };

  const move = (e) => {
    if (!dragging) return;
    const p = getPoint(e);

    // keep within viewport
    const x = clamp(p.x - offsetX, 0, window.innerWidth - el.offsetWidth);
    const y = clamp(p.y - offsetY, 0, window.innerHeight - el.offsetHeight);

    el.style.left = x + "px";
    el.style.top = y + "px";
    el.style.right = "auto"; // important if it was right-aligned originally
  };

  const end = () => { dragging = false; };

  el.addEventListener("pointerdown", start);
  window.addEventListener("pointermove", move);
  window.addEventListener("pointerup", end);
}

function getPoint(e) {
  return { x: e.clientX, y: e.clientY };
}

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

makeDraggable(document.getElementById("flowerLeft"));
makeDraggable(document.getElementById("flowerRight"));

