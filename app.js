let mode = "chat";

function setMode(m) {
  mode = m;
  addMessage("AI", "Mode switched to: " + m.toUpperCase());
}

function send() {
  let input = document.getElementById("input").value;
  if (!input) return;

  addMessage("You", input);

  let response = generateResponse(input);

  setTimeout(() => {
    addMessage("AI", response);
  }, 500);

  document.getElementById("input").value = "";
}

function generateResponse(text) {

  if (mode === "chat") {
    return "Zentra AI: " + text + " → This is a smart response system placeholder.";
  }

  if (mode === "roast") {
    return text + " looks like a WiFi signal that never connects 💀";
  }

  if (mode === "code") {
    return "Here is your code idea:\n\nfunction hello(){ console.log('Hello World'); }";
  }

  if (mode === "idea") {
    return "Idea: Build a game where " + text + " changes reality based on choices.";
  }

  if (mode === "game") {
    return "Game concept: 2D endless runner based on " + text;
  }

  return "Unknown mode";
}

function addMessage(sender, text) {
  let div = document.createElement("div");
  div.classList.add("msg");

  if (sender === "You") div.classList.add("user");
  else div.classList.add("ai");

  div.innerText = sender + ": " + text;

  document.getElementById("chatBox").appendChild(div);
}
