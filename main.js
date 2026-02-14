// Mobile nav
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
if (menuBtn && navLinks) menuBtn.addEventListener("click", () => navLinks.classList.toggle("mobile"));

// Zoom modal
const modal = document.getElementById("zoomModal");
const modalImg = document.getElementById("zoomImg");
const modalClose = document.getElementById("zoomClose");

function openModal(src, alt){
  if(!modal || !modalImg) return;
  modal.classList.add("open");
  modalImg.src = src;
  modalImg.alt = alt || "Zoomed image";
  document.body.style.overflow = "hidden";
}
function closeModal(){
  if(!modal || !modalImg) return;
  modal.classList.remove("open");
  modalImg.src = "";
  document.body.style.overflow = "";
}
if(modalClose) modalClose.addEventListener("click", closeModal);
if(modal) modal.addEventListener("click", (e)=>{ if(e.target === modal) closeModal(); });
document.addEventListener("keydown",(e)=>{ if(e.key==="Escape") closeModal(); });
document.querySelectorAll(".zoomable").forEach(img=>{
  img.addEventListener("click", ()=>openModal(img.src, img.alt));
});

// Contact slide panel
const openContact = document.getElementById("openContact");
const overlay = document.getElementById("overlay");
const panel = document.getElementById("contactPanel");
const closePanelBtn = document.getElementById("closePanel");

function openPanel(){
  if(!overlay || !panel) return;
  overlay.classList.add("open");
  panel.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closePanel(){
  if(!overlay || !panel) return;
  overlay.classList.remove("open");
  panel.classList.remove("open");
  document.body.style.overflow = "";
}
if(openContact) openContact.addEventListener("click", (e)=>{ e.preventDefault(); openPanel(); });
if(closePanelBtn) closePanelBtn.addEventListener("click", closePanel);
if(overlay) overlay.addEventListener("click", closePanel);

// Year
const year = document.getElementById("year");
if(year) year.textContent = new Date().getFullYear();
