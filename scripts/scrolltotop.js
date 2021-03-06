/*FILE NAME:scrolltotop.js
WRITTEN BY: FRANCIN 
WHEN: NOVEMBER 2020
PURPOSE: When user scrolls down on the page it will display a pointer in the corner, when clicked the page will scroll to the 
top.
*/

var mybutton = document.getElementById("scrolltop_btn");
window.onscroll = function() {scrollFunction()};
mybutton.addEventListener("click", topFunction);

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
