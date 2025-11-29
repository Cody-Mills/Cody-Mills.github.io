let SlideIndex = 1;


function currentSlide(n) {
  showSlides(SlideIndex = n);
}

// Main logic to display the Slides
function showSlides(n) {
  let i;
  let Slides = document.getElementsByClassName("mySlides");

  // Update the global SlideIndex variable based on the input n
  // This is crucial for keeping track of the current Slide when 
  // navigating with thumbnails or next/prev buttons.
  if (n > Slides.length) { 
      SlideIndex = 1; // Loop back to the first Slide
  } else if (n < 1) { 
      SlideIndex = Slides.length; // Loop to the last Slide
  } else {
      SlideIndex = n;
  }

  // Hide all Slides
  for (i = 0; i < Slides.length; i++) {
    Slides[i].style.display = "none";
  }

  // Show the current Slide. SlideIndex is 1-based, array is 0-based.
  Slides[SlideIndex - 1].style.display = "block";
  
}

function nextSlide() {
  SlideIndex++; 
  showSlides(SlideIndex);
}

function prevSlide() {
  SlideIndex--; 
  showSlides(SlideIndex);
}