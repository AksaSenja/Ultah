
/* ========================================
   PERSONALIZATION
   Ubah bagian ini sesuai penerima
======================================== */

const CONFIG = {
  name: "Alya",
  sender: "Someone who loves you",
  letter: `Happy birthday to you!

Today is a reminder of how special you are. I hope this new chapter brings you so many reasons to smile, moments that make your heart feel full, and dreams that slowly become reality.

Thank you for being the person you are. You may not always realize how wonderful you are, but I hope today reminds you of that.

No matter what life brings, I hope you never forget that you deserve happiness, kindness, and all the beautiful things this world has to offer.

Enjoy your special day. You deserve every bit of it. ♡`
};

/* ========================================
   ELEMENTS
======================================== */

const hero = document.getElementById("hero");
const birthday = document.getElementById("birthday");
const letter = document.getElementById("letter");
const memories = document.getElementById("memories");
const finalSection = document.getElementById("final");

const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

document.getElementById("name").textContent = CONFIG.name;
document.getElementById("letterName").textContent = CONFIG.name;
document.getElementById("sender").textContent = CONFIG.sender;

/* ========================================
   STAR GENERATOR
======================================== */

const starsContainer = document.getElementById("stars");

for (let i = 0; i < 70; i++) {
  const star = document.createElement("span");

  star.className = "star";
  star.textContent = Math.random() > 0.5 ? "✦" : "·";

  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";
  star.style.fontSize = (Math.random() * 12 + 5) + "px";
  star.style.animationDelay = Math.random() * 3 + "s";

  starsContainer.appendChild(star);
}

/* ========================================
   SECTION NAVIGATION
======================================== */

function showSection(section) {
  section.classList.remove("hidden");
  section.classList.add("fade-in");

  setTimeout(() => {
    section.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }, 100);
}

/* ========================================
   START SURPRISE
======================================== */

document.getElementById("startBtn").addEventListener("click", () => {
  birthday.classList.remove("hidden");
  birthday.classList.add("fade-in");

  birthday.scrollIntoView({
    behavior: "smooth"
  });

  bgMusic.play().then(() => {
    musicBtn.classList.remove("hidden");
    musicBtn.textContent = "♫";
  }).catch(() => {
    musicBtn.classList.remove("hidden");
  });

  createConfetti();
});

/* ========================================
   LETTER
======================================== */

document.getElementById("letterBtn").addEventListener("click", () => {
  showSection(letter);
  typeLetter();
});

let letterStarted = false;

function typeLetter() {
  if (letterStarted) return;

  letterStarted = true;

  const target = document.getElementById("letterText");
  const message = CONFIG.letter;

  target.textContent = "";

  let index = 0;

  function typing() {
    if (index < message.length) {
      target.textContent += message.charAt(index);
      index++;

      setTimeout(typing, 25);
    }
  }

  typing();
}

/* ========================================
   MEMORIES
======================================== */

document.getElementById("memoryBtn").addEventListener("click", () => {
  showSection(memories);
});

/* ========================================
   FINAL SURPRISE
======================================== */

document.getElementById("finalBtn").addEventListener("click", () => {
  showSection(finalSection);
  createConfetti();
});

/* ========================================
   RESTART
======================================== */

document.getElementById("restartBtn").addEventListener("click", () => {
  window.location.reload();
});

/* ========================================
   MUSIC CONTROL
======================================== */

musicBtn.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicBtn.textContent = "♫";
  } else {
    bgMusic.pause();
    musicBtn.textContent = "♪";
  }
});

/* ========================================
   CONFETTI
======================================== */

function createConfetti() {
  const colors = ["#f0a6c8", "#c5a9ff", "#ffffff", "#ffe2a8"];

  for (let i = 0; i < 70; i++) {
    const confetti = document.createElement("div");

    confetti.style.position = "fixed";
    confetti.style.top = "-20px";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.width = Math.random() * 8 + 5 + "px";
    confetti.style.height = Math.random() * 12 + 5 + "px";
    confetti.style.background =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.borderRadius = "3px";
    confetti.style.zIndex = "9999";
    confetti.style.pointerEvents = "none";

    document.body.appendChild(confetti);

    const duration = Math.random() * 3 + 2;
    const horizontal = Math.random() * 200 - 100;

    confetti.animate([
      {
        transform: "translate(0,0) rotate(0deg)",
        opacity: 1
      },
      {
        transform: `translate(${horizontal}px, 110vh) rotate(720deg)`,
        opacity: 0
      }
    ], {
      duration: duration * 1000,
      easing: "ease-out"
    });

    setTimeout(() => {
      confetti.remove();
    }, duration * 1000);
  }
}
