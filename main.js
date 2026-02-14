const menuBtn = document.getElementById("menuBtn");
const menuOverlay = document.getElementById("menuOverlay");
const menuClose = document.getElementById("menuClose");

function openMenu(){
  menuOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeMenu(){
  menuOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

menuBtn?.addEventListener("click", openMenu);
menuClose?.addEventListener("click", closeMenu);
menuOverlay?.addEventListener("click", (e)=>{
  if(e.target === menuOverlay) closeMenu();
});
document.querySelectorAll(".mLink").forEach(a=>{
  a.addEventListener("click", ()=>closeMenu());
});

// Zoom modal
const zoomModal = document.getElementById("zoomModal");
const zoomImg = document.getElementById("zoomImg");
const zoomClose = document.getElementById("zoomClose");

function openZoom(src, alt){
  zoomModal.classList.add("open");
  zoomImg.src = src;
  zoomImg.alt = alt || "Zoomed preview";
  document.body.style.overflow = "hidden";
}
function closeZoom(){
  zoomModal.classList.remove("open");
  zoomImg.src = "";
  document.body.style.overflow = "";
}

zoomClose?.addEventListener("click", closeZoom);
zoomModal?.addEventListener("click",(e)=>{ if(e.target===zoomModal) closeZoom(); });
document.addEventListener("keydown",(e)=>{ if(e.key==="Escape") closeZoom(); });

document.querySelectorAll(".zoomable").forEach(img=>{
  img.addEventListener("click", ()=>openZoom(img.src, img.alt));
});

// year
const year = document.getElementById("year");
if(year) year.textContent = new Date().getFullYear();
