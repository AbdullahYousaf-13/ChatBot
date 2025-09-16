async function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (!message) return;

  input.value = "";
  const chatBox = document.getElementById("chat-box");

  // Add user message
  chatBox.innerHTML += `<div class="chat-bubble user">You: ${message}</div>`;
  chatBox.scrollTop = chatBox.scrollHeight;

  // Add "bot is thinking..." indicator
  const thinkingId = Date.now();
  chatBox.innerHTML += `<div class="chat-bubble bot typing" id="thinking-${thinkingId}">Bot is thinking<span class="dots">.</span></div>`;
  chatBox.scrollTop = chatBox.scrollHeight;

  animateDots(`thinking-${thinkingId}`);

  try {
    const res = await fetch("/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });

    const data = await res.json();

    // Remove "thinking..." message
    document.getElementById(`thinking-${thinkingId}`).remove();

    // Show actual bot reply
    chatBox.innerHTML += `<div class="chat-bubble bot">Bot: ${data.reply}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;

  } catch (error) {
    document.getElementById(`thinking-${thinkingId}`).remove();
    chatBox.innerHTML += `<div class="chat-bubble bot">Bot: [Error fetching response]</div>`;
  }
}

// Animate dots for "Bot is thinking..."
function animateDots(id) {
  const el = document.getElementById(id).querySelector(".dots");
  let dots = 1;
  setInterval(() => {
    el.textContent = ".".repeat(dots);
    dots = (dots % 3) + 1;
  }, 500);
}
