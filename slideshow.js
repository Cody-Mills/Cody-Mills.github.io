let slideIndex = 1;
let autoSlideIntervalID; 

// Function to control the timer and automatic switching
function startAutoSlideshow() {
    if (autoSlideIntervalID) {
        clearInterval(autoSlideIntervalID);
    }
    
    showSlides(slideIndex);

    autoSlideIntervalID = setInterval(() => {
        slideIndex++; 
        showSlides(slideIndex);
    }, 8000); 
}

startAutoSlideshow(); 

function currentSlide(n) {
  resetAutoSlideshowTimer(); 
  showSlides(slideIndex = n);
}

// Main logic to display the slides
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) { 
      slideIndex = 1; 
  } else if (n < 1) { 
      slideIndex = slides.length; 
  } else {
      slideIndex = n;
  }

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

function resetAutoSlideshowTimer() {
    
    clearInterval(autoSlideIntervalID);
    
    
    startAutoSlideshow(); 
}