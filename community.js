// Select elements from the DOM
const chatBody = document.getElementById("chatBody");
const messageInput = document.getElementById("messageInput");
const sendMessageButton = document.getElementById("sendMessageButton");

// Function to append a message to the chat body
function appendMessage(content, type) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", type);

  const messageParagraph = document.createElement("p");
  messageParagraph.textContent = content;

  const timeSpan = document.createElement("span");
  timeSpan.classList.add("time");
  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  timeSpan.textContent = currentTime;

  messageDiv.appendChild(messageParagraph);
  messageDiv.appendChild(timeSpan);
  chatBody.appendChild(messageDiv);

  // Scroll to the bottom of the chat
  chatBody.scrollTop = chatBody.scrollHeight;
}

// Event listener for the send button
sendMessageButton.addEventListener("click", () => {
  const userMessage = messageInput.value.trim();
  if (userMessage) {
    // Append user's message
    appendMessage(userMessage, "sent");
    messageInput.value = ""; // Clear the input field

    // Append auto-reply
    setTimeout(() => {
      appendMessage("Your problems will be solved shortly.", "received");
    }, 1000); // Auto-reply after 1 second
  }
});

// Optional: Allow sending messages with the Enter key
messageInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendMessageButton.click(); // Simulate button click
  }
});
