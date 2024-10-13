const hamburger = document.querySelector(".hamburger");
const offScreenMenu = document.querySelector(".off__screen__menu");
const closeMenu = document.querySelector(".off__screen__menu a.close");

hamburger.addEventListener("click", () => {
  offScreenMenu.classList.toggle("active"); // Toggle active class
});

closeMenu.addEventListener("click", () => {
  offScreenMenu.classList.remove("active"); // Remove active class to hide
});

// Close the menu when a menu item is clicked
document.querySelectorAll(".off__screen__menu ul li a").forEach((link) => {
  link.addEventListener("click", () => {
    offScreenMenu.classList.remove("active");
  });
});
// Get the buttons
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const scrollToBottomBtn = document.getElementById("scrollToBottomBtn");

// Scroll to the top
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scroll effect
  });
});

// Scroll to the bottom
scrollToBottomBtn.addEventListener("click", () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth", // Smooth scroll effect
  });
});

// Optionally: Show the 'Scroll to Top' button only when the user scrolls down
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});
