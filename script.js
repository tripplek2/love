// ===== ELEMENTS =====
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

const form = document.getElementById("valentineForm");
const nameInput = document.getElementById("nameInput");

const loveButtons = document.getElementById("loveButtons");
const yesBtn = document.getElementById("yesBtn");
const ofCourseBtn = document.getElementById("ofCourseBtn");
const noBtn = document.getElementById("noBtn");

const responseSection = document.getElementById("response");
const responseMessage = document.getElementById("responseMessage");

// ===== MUSIC CONTROL =====
musicBtn.addEventListener("click", function () {
  if (music.paused) {
    music.play();
    musicBtn.textContent = "Pause 🎵";
  } else {
    music.pause();
    musicBtn.textContent = "Play 🎵";
  }
});

// ===== FORM SUBMIT =====
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();

  if (name === "") return;

  // Hide form
  form.classList.add("hidden");

  // Show love buttons
  loveButtons.classList.remove("hidden");
});

// ===== YES BUTTON =====
function showLoveMessage(name) {
  loveButtons.classList.add("hidden");
  responseSection.classList.remove("hidden");
  responseMessage.textContent = `${name}, you've always made me the happiest person alive! I love you Plumy 💖✨`;

  startRoses();
}

yesBtn.addEventListener("click", function () {
  const name = nameInput.value.trim();
  showLoveMessage(name);
});

ofCourseBtn.addEventListener("click", function () {
  const name = nameInput.value.trim();
  showLoveMessage(name);
});

// ===== NO BUTTON (RUN AWAY 😅) =====
noBtn.addEventListener("mouseover", function () {
  const x = Math.floor(Math.random() * 200) - 100;
  const y = Math.floor(Math.random() * 200) - 100;

  noBtn.style.position = "relative";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// ===== FLOATING ROSES =====
function startRoses() {
  setInterval(() => {
    const rose = document.createElement("div");
    rose.classList.add("rose");
    rose.textContent = "🌹"; // red rose emoji

    rose.style.left = Math.random() * window.innerWidth + "px";
    rose.style.fontSize = Math.random() * 20 + 20 + "px";

    document.body.appendChild(rose);

    setTimeout(() => {
      rose.remove();
    }, 5000);
  }, 400); // new rose every 0.4 seconds
}