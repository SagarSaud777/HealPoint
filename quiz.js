document.addEventListener("DOMContentLoaded", () => {
  const quizButton = document.getElementById("quiz-btn"); // Use the correct ID

  if (quizButton) {
    // Check if the button exists
    quizButton.addEventListener("click", () => {
      window.location.href = "quiz.html"; // Redirect to the quiz page
    });
  } else {
    console.error("Button with id 'quiz-btn' not found."); // Log error if not found
  }
});
