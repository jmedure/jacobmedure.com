function toggle() {
  var element = document.getElementById("slide-out-menu");
  element.classList.toggle("hidden");
  console.log(element);
}

var hamburger = document.querySelector(".hamburger");
  // On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
hamburger.classList.toggle("bw");
});
