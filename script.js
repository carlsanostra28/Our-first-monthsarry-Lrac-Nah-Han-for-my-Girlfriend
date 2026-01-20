let wrongAttempts = 0;
const maxAttempts = 3;
let mailOpen = false;

// ------------------- INITIAL SETUP -------------------
window.onload = () => {
  document.getElementById("mailPage").style.display = "none";   // hide mail page
  document.getElementById("letter").style.display = "none";     // hide letter
  document.getElementById("name").focus();
};

// ------------------- LOGIN FUNCTION -------------------
function login() {
  const usernameInput = document.getElementById("name");
  const passwordInput = document.getElementById("password");
  const error = document.getElementById("error");

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  const validUsername = username === "Carl" || username === "Hanna";
  const validPassword = password === "122025";

  if (!validUsername && !validPassword) {
    wrongAttempts++;
    error.innerText = "Incorrect username and password";
  } else if (!validUsername) {
    wrongAttempts++;
    error.innerText = "Incorrect username";
  } else if (!validPassword) {
    wrongAttempts++;
    error.innerText = "Incorrect password";
  }

  if (wrongAttempts >= maxAttempts) {
    error.innerText = "Too many wrong attempts. Page is locked.";
    document.querySelector("#loginCard button").disabled = true;
    usernameInput.disabled = true;
    passwordInput.disabled = true;
    return;
  }

  if (validUsername && validPassword) {
    document.getElementById("loginCard").style.display = "none";
    document.getElementById("mailPage").style.display = "flex";

    // ENSURE LETTER IS STILL HIDDEN AFTER LOGIN
    const letter = document.getElementById("letter");
    letter.style.display = "none";
    mailOpen = false;

    const bigHeart = document.getElementById("heart");
    bigHeart.style.opacity = "0.5";
  }
}

// ------------------- MAIL TOGGLE FUNCTION -------------------
function toggleMail() {
  const letter = document.getElementById("letter");
  const envelope = document.getElementById("envelope");
  const toggleBtn = document.getElementById("toggleMail");
  const mailContainer = document.querySelector(".mail");
  const bigHeart = document.getElementById("heart");
  const bgMusic = document.getElementById("bgMusic");

  if (!mailOpen) {
    letter.style.display = "flex";       // show letter only when clicked
    envelope.style.transform = "rotateX(180deg) scale(1.1)";
    mailContainer.classList.add("open");
    toggleBtn.innerText = "Close Mail ✉️";
    mailOpen = true;
    bigHeart.style.opacity = "0.25";
    bgMusic.play();
  } else {
    letter.style.display = "none";       // hide letter again
    envelope.style.transform = "rotateX(0deg) scale(1)";
    mailContainer.classList.remove("open");
    toggleBtn.innerText = "Open Mail 💌";
    mailOpen = false;
    bigHeart.style.opacity = "0.5";
    bgMusic.pause();
    bgMusic.currentTime = 0;
  }
}
