var x = document.querySelector(".extendfield_button" ul);
x.addEventListener("click", extendfield,true)
function extendfield() {
    var extend = document.querySelector(".field_text");
    if (extend.style.display === "none") {
        extend.style.display = "block";
    } else {
        extend.style.display = "none";
    }
}
