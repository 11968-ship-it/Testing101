document.addEventListener("DOMContentLoaded", () => {
  // Find the toggle button and navigation links
  const toggleButton = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  // When the button is clicked, toggle the "show" class
  if (toggleButton && navLinks) {
    toggleButton.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});
