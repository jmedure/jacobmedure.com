function toggle() {
  var element = document.getElementById("slide-out-menu");
  element.classList.toggle("hidden");
  
  var element = document.getElementById("hamburger");
  element.classList.toggle("sticky");
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

function fadeInScroll() {
  var fadeElements = document.querySelectorAll('.fade-in');
  // console.log(fadeElements);
  fadeElements.forEach(el => {
    el.classList.add("fade-in-toggle");
    // console.log(el);
  })
}

window.addEventListener("scroll", function(){
  if (window.scrollY > 0) {
    fadeInScroll();
  };
})

function fadeInLoad() {
  var fadeElements = document.querySelectorAll('.fade-in-load');
  // console.log(fadeElements);
  fadeElements.forEach(el => {
    el.classList.add("fade-in-load-toggle");
    // console.log(el);
  })
}

window.addEventListener("load", function(){
    fadeInLoad();
})
