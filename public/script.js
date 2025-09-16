async function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value;
  input.value = "";

  const chatBox = document.getElementById("chat-box");
  chatBox.innerHTML += `<div class="user">You: ${message}</div>`;

  const res = await fetch("/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  });

  const data = await res.json();
  chatBox.innerHTML += `<div class="bot">Bot: ${data.reply}</div>`;
  chatBox.scrollTop = chatBox.scrollHeight;
}
