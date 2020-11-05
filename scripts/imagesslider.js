/*FILE NAME:imagesslider.js
WRITTEN BY: SEBASTIAN 
WHEN: NOVEMBER 2020
PURPOSE: Using javascript to display slideshow on homepage.
*/


const body = document.getElementsByClassName("homepage");
body[0].addEventListener("click", showSlides);

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}
