console.log("Script loaded successfully!");

document.addEventListener("DOMContentLoaded", () => {
  // Find the toggle button and navigation links
  const toggleButton = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  // When the button is clicked, toggle the "show" class
  if (toggleButton && navLinks) {
    toggleButton.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  // typing effect

  const typingElement = document.getElementById("typing-text");
  const text = "print('Hello, World!')";
  let index = 0;

  function typeText() {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;

      setTimeout(typeText, 100);
    } else {

      // to wait 1s after finishing 
      setTimeout(deleteText, 1000);
    }
  }

  function deleteText() {
    if (index > 0) {
      typingElement.textContent = text.substring(0, index - 1);
      index--;

      setTimeout(deleteText, 50);
    } else {
      // to wait 0.5s after finishing deleting
      setTimeout(typeText, 500);
    }
  }

  if (typingElement) {
    typeText();
  } else {
    console.log("ERROR: typing-text was not found!");
  }

});