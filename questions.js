function submitQuiz() {
  // Check if all questions are answered
  const questions = document.querySelectorAll(".question");
  let allAnswered = true;

  questions.forEach((question) => {
    const options = question.querySelectorAll('input[type="radio"]');
    let answered = false;
    options.forEach((option) => {
      if (option.checked) {
        answered = true;
      }
    });
    if (!answered) {
      allAnswered = false;
    }
  });

  // Show error popup if not all questions are answered
  if (!allAnswered) {
    showPopup("Error: Please answer all questions", "error");
  } else {
    showPopup("Your Quiz is Submitted Successfully!", "success");
  }
}

function showPopup(message, type) {
  // Create dark background overlay
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  overlay.style.backdropFilter = "blur(5px)";
  overlay.style.zIndex = "999";

  // Create the popup container
  const popupContainer = document.createElement("div");
  popupContainer.style.position = "fixed";
  popupContainer.style.top = "50%";
  popupContainer.style.left = "50%";
  popupContainer.style.transform = "translate(-50%, -50%)";
  popupContainer.style.padding = "20px";
  popupContainer.style.backgroundColor = "#fff";
  popupContainer.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
  popupContainer.style.borderRadius = "8px";
  popupContainer.style.textAlign = "center";
  popupContainer.style.zIndex = "1000";

  // Set the message inside the popup
  const popupMessage = document.createElement("p");
  popupMessage.textContent = message;
  popupMessage.style.marginBottom = "20px";
  popupMessage.style.fontSize = "18px";
  popupMessage.style.color = type === "error" ? "#e74c3c" : "#2ecc71"; // Error: red, Success: green
  popupContainer.appendChild(popupMessage);

  // Create the "OK" button
  const okButton = document.createElement("button");
  okButton.textContent = "OK";
  okButton.style.padding = "10px 20px";
  okButton.style.backgroundColor = "#8353e2";
  okButton.style.color = "#fff";
  okButton.style.border = "none";
  okButton.style.borderRadius = "5px";
  okButton.style.cursor = "pointer";

  // Append the button to the popup
  popupContainer.appendChild(okButton);
  document.body.appendChild(overlay); // Add dark background
  document.body.appendChild(popupContainer);

  // When "OK" is clicked, remove the popup, dark background, and reset if it's a success
  okButton.addEventListener("click", function () {
    document.body.removeChild(popupContainer);
    document.body.removeChild(overlay);

    // If it's a success, reset the quiz
    if (type === "success") {
      document.querySelectorAll('input[type="radio"]').forEach((radio) => {
        radio.checked = false;
      });
    }
  });
}
