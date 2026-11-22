// GANTI NOMOR DI BAWAH: format internasional tanpa tanda +, spasi, atau 0 di depan.
const WHATSAPP_NUMBER = "628XXXXXXXXXX";
// GANTI dengan tautan Google Maps lokasi peternakan Anda.
const GOOGLE_MAPS_URL = "https://maps.google.com/?q=Lokasi+Peternakan";

document.querySelectorAll("[data-wa]").forEach((el) => {
  el.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Halo, saya ingin bertanya tentang peternakan dan penjualan babi.")}`;
  el.target = "_blank";
  el.rel = "noopener";
});
document.querySelectorAll("[data-wa-message]").forEach((el) => {
  el.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(el.dataset.waMessage)}`;
  el.target = "_blank";
  el.rel = "noopener";
});
const mapLink = document.getElementById("mapLink");
if (mapLink) mapLink.href = GOOGLE_MAPS_URL;
document.getElementById("year").textContent = new Date().getFullYear();

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
}));