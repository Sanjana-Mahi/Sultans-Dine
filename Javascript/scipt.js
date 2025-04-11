document.addEventListener("DOMContentLoaded", function () {
  var flkty = new Flickity('[data-carousel]', {
      accessibility: true,
      prevNextButtons: true,
      pageDots: true,
      wrapAround: true,  // Enables infinite scrolling
      autoPlay: 3000,    // Slides change every 3 seconds
      pauseAutoPlayOnHover: false
  });
});

// Show button when scrolled down
window.onscroll = function() {
  var scrollButton = document.querySelector('.scroll-to-top');
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
};

