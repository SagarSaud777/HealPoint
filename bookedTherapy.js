document.querySelector(".form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get form fields
  const name = document.getElementById("name").value;
  const therapist = document.getElementById("therapist").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  // Check if all fields are filled
  if (name === "" || therapist === "" || date === "" || time === "") {
    // If any field is empty, show error popup
    showPopup("Error: Please fill out all fields", "error");
  } else {
    // If all fields are filled, show success popup
    showPopup("Your appointment with the therapist is booked!", "success");
  }
});

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

  // When "OK" is clicked, remove the popup and dark background
  okButton.addEventListener("click", function () {
    document.body.removeChild(popupContainer);
    document.body.removeChild(overlay);

    // If it's a success, reset the form
    if (type === "success") {
      document.querySelector(".form").reset();
    }
  });
}
