let slideIndex = 1;


function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Main logic to display the slides
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  // Update the global slideIndex variable based on the input n
  // This is crucial for keeping track of the current slide when 
  // navigating with thumbnails or next/prev buttons.
  if (n > slides.length) { 
      slideIndex = 1; // Loop back to the first slide
  } else if (n < 1) { 
      slideIndex = slides.length; // Loop to the last slide
  } else {
      slideIndex = n;
  }

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Show the current slide. slideIndex is 1-based, array is 0-based.
  slides[slideIndex - 1].style.display = "block";
  
}

function nextSlide() {
  slideIndex++; 
  showSlides(slideIndex);
}

function prevSlide() {
  slideIndex--; 
  showSlides(slideIndex);
}