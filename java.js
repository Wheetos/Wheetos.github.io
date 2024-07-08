function Hamburger() {
  // Look for .hamburger
  var hamburger = document.querySelector(".hamburger");
  var navbar = document.querySelector(".navbar");
  // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
    navbar.classList.toggle ("navbar-active");
  })
}