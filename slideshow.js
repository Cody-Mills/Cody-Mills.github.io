let slideIndex = 1;
showSlides(slideIndex);

// Function to manually navigate to a specific slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Function to show slides
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // If n is greater than the number of slides, reset to the first slide
    if (n > slides.length) { slideIndex = 1 }

    // If n is less than 1, go to the last slide
    if (n < 1) { slideIndex = slides.length }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove the "active" class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    // Show the current slide and mark the corresponding dot as active
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}

// Swipe functionality (touch and mouse)
let touchStartX = 0;
let touchEndX = 0;
let isMouseDown = false;

function handleStart(event) {
    if (event.type === 'touchstart') {
        touchStartX = event.touches[0].clientX; // Get the initial touch X position
    } else if (event.type === 'mousedown') {
        touchStartX = event.clientX; // Get the initial mouse X position
        isMouseDown = true; // Set mouse button state to pressed
    }
}

function handleMove(event) {
    if (event.type === 'touchmove') {
        touchEndX = event.touches[0].clientX; // Get the current touch X position
    } else if (event.type === 'mousemove' && isMouseDown) {
        touchEndX = event.clientX; // Get the current mouse X position
    }
}

function handleEnd() {
    if (touchEndX < touchStartX) {
        // Swiped left: go to the next slide
        plusSlides(1);
    } else if (touchEndX > touchStartX) {
        // Swiped right: go to the previous slide
        plusSlides(-1);
    }

    // Reset values
    touchStartX = 0;
    touchEndX = 0;
    isMouseDown = false; // Reset mouse button state
}

// Function to navigate to the next or previous slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Add event listeners to the slideshow container
const slideshowContainer = document.querySelector('.slideshow-container');

// Touch events
slideshowContainer.addEventListener('touchstart', handleStart, false);
slideshowContainer.addEventListener('touchmove', handleMove, false);
slideshowContainer.addEventListener('touchend', handleEnd, false);

// Mouse events
slideshowContainer.addEventListener('mousedown', handleStart, false);
slideshowContainer.addEventListener('mousemove', handleMove, false);
slideshowContainer.addEventListener('mouseup', handleEnd, false);