function toggle() {
  var element = document.getElementById("slide-out-menu");
  element.classList.toggle("hidden");
  console.log(element);
};

  var hamburger = document.querySelector(".hamburger");
    // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
  hamburger.classList.toggle("bw");
  });

  var controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
  							triggerElement: "#trigger1",
  							triggerHook: 0.9, // show, when scrolled 10% into view
  							duration: "100", // hide 10% before exiting view (80% + 10% from bottom)
  							offset: 0 // move trigger to center of element
  						})
  						.setClassToggle("#reveal1", "visible") // add class to reveal
  						.addIndicators() // add indicators (requires plugin)
  						.addTo(controller);
