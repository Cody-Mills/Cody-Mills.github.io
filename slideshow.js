let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  // If n is greater than the number of slides, reset to the first slide
  if (n > slides.length) { slideIndex = 1 }

  // If n is less than 1, go to the last slide
  if (n < 1) { slideIndex = slides.length }

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Show the current slide
  slides[slideIndex - 1].style.display = "block";

  // Automatically move to the next slide after 5 seconds
  setTimeout(() => {
    showSlides(slideIndex + 1); // Move to the next slide
  }, 5000); // Change slide every 5 seconds
}