// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", () => {
  // Linking the pages
  let linking = document.querySelector("#services");
  let blogs = document.querySelector("#blogs");
  let community = document.querySelector("#community");
  let contact = document.querySelector("#contact");
  let home = document.querySelector("#home");
  let letsTalk = document.querySelector(".btn");
  let joinNow = document.querySelector(".com-btn");
  let heroButton = document.querySelector("#discover-more");
  let communityFooter = document.querySelector(".community");

  const navigateTo = (url) => {
    // Check if we're currently on the community page to prevent refresh
    if (window.location.pathname !== "/community.html") {
      window.location.href = url;
    }
  };

  // Event listener for the community footer
  if (communityFooter) {
    communityFooter.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default behavior
      navigateTo("community.html");
    });
  }

  // Event listener for the hero button
  if (heroButton) {
    heroButton.addEventListener("click", (event) => {
      event.preventDefault();
      navigateTo("services.html");
    });
  }

  // Event listener for blogs link
  if (blogs) {
    blogs.addEventListener("click", (event) => {
      event.preventDefault();
      navigateTo("blogs.html");
    });
  }

  // Event listener for community link
  if (community) {
    community.addEventListener("click", (event) => {
      event.preventDefault();
      navigateTo("community.html");
    });
  }

  // Event listener for contact link
  if (contact) {
    contact.addEventListener("click", (event) => {
      event.preventDefault();
      navigateTo("contactus.html");
    });
  }

  // Event listener for services link
  if (linking) {
    linking.addEventListener("click", (event) => {
      event.preventDefault();
      navigateTo("services.html");
    });
  }

  // Event listener for home link
  if (home) {
    home.addEventListener("click", (event) => {
      event.preventDefault();
      navigateTo("index.html");
    });
  }

  // Event listener for "Let's Talk" button
  if (letsTalk) {
    letsTalk.addEventListener("click", (event) => {
      event.preventDefault();
      navigateTo("community.html");
    });
  }

  // Event listener for "Join Now" button
  if (joinNow) {
    joinNow.addEventListener("click", (event) => {
      event.preventDefault();
      navigateTo("community.html");
    });
  }
});
