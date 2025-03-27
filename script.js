// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
// Menambahkan event listener ke link dengan class "cta"
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".cta").addEventListener("click", function (event) {
    event.preventDefault(); // Mencegah aksi default link
    window.location.href = "FREDERICO.pdf"; // troka ho naran.pdf
  });
});
// Menambahkan event listener untuk Facebook
document.getElementById("facebook-icon").addEventListener("click", function () {
  window.open("https://www.facebook.com/Frederico D'jesus", "_blank"); // Ganti dengan URL Facebook kamu
});

// Menambahkan event listener untuk Instagram
document
  .getElementById("instagram-icon")
  .addEventListener("click", function () {
    window.open("https://www.instagram.com/fersthallens_143", "_blank"); // Ganti dengan URL Instagram kamu
  });
