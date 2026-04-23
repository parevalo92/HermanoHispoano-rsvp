// ===============================
// CONTADOR
// ===============================
const targetDate = new Date("2026-05-15T18:00:00").getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ===============================
// FORMULARIO
// ===============================
const form = document.getElementById("registroForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const interes = document.getElementById("interes").value;

  if (!nombre || !email || !telefono || !interes) {
    formMessage.textContent = "Por favor completa todos los campos.";
    formMessage.style.color = "#d93025";
    return;
  }

  formMessage.textContent =
    "¡Gracias por registrarte! Hemos recibido tu información.";
  formMessage.style.color = "#0f8a4b";

  form.reset();
});

// ===============================
// EFECTO SUAVE EN NAVBAR AL SCROLL
// ===============================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    navbar.style.background = "rgba(8, 17, 32, 0.92)";
    navbar.style.boxShadow = "0 10px 35px rgba(0,0,0,0.18)";
  } else {
    navbar.style.background = "rgba(8, 17, 32, 0.8)";
    navbar.style.boxShadow = "none";
  }
});