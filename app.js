let mode = "chat";
let user = {};

/* -------------------
   AUTH SYSTEM (DEMO)
   Firebase will replace this later
------------------- */

function register() {
  user = {
    name: document.getElementById("name").value,
    birthday: document.getElementById("birthday").value,
    email: document.getElementById("email").value
  };

  alert("Account Created (demo)");
  enterApp();
}

function login() {
  user.email = document.getElementById("email").value;
  alert("Login successful (demo)");
  enterApp();
}

function forgot() {
  alert("Password reset email sent (demo)");
}

/* ENTER APP */
function enterApp() {
  document.getElementById("auth").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");
}

/* LOGOUT */
function logout() {
  document.getElementById("app").classList.add("hidden");
  document.getElementById("auth").classList.remove("hidden");
}

/* -------------------
   CHAT SYSTEM
------------------- */

function setMode(m) {
  mode = m;
}

function send() {
  let input = document.getElementById("input").value;
  if (!input) return;

  let response = generate(input);

  document.getElementById("chat").innerHTML += `
    <p><b>You:</b> ${input}</p>
    <p><b>Zentra:</b> ${response}</p>
    <hr>
  `;

  document.getElementById("input").value = "";
}

function generate(text) {

  if (mode === "chat") {
    return "Zentra AI: " + text;
  }

  if (mode === "roast") {
    return text + " looks like a phone with 1% battery 💀";
  }

  if (mode === "code") {
    return "function app(){ console.log('Zentra AI'); }";
  }

  return text;
}

/* -------------------
   PROFILE SYSTEM
------------------- */

function openProfile() {
  document.getElementById("profile").classList.remove("hidden");

  document.getElementById("p_name").value = user.name || "";
  document.getElementById("p_birthday").value = user.birthday || "";
  document.getElementById("p_email").value = user.email || "";
}

function closeProfile() {
  document.getElementById("profile").classList.add("hidden");
}

function saveProfile() {
  user.name = document.getElementById("p_name").value;
  user.birthday = document.getElementById("p_birthday").value;

  alert("Profile Saved");
  closeProfile();
}
