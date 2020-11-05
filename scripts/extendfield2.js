const extend = document.getElementsByClassName("field_header");
const clickextend = document.getElementsByClassName("field_text");

for (let i=0; i<extend.length; i++){
    extend[0].addEventListener("click", function() {
        for (let i=0; i<clickextend.length; i++){
            if (clickextend[0].style.display=== "none"){
                clickextend[0].style.display = "block";
            }else{
                clickextend[0].style.display = "none";
            }
        }
    });
}
for (let i=0; i<extend.length; i++){
    extend[1].addEventListener("click", function() {
        for (let i=0; i<clickextend.length; i++){
            if (clickextend[1].style.display=== "none"){
                clickextend[1].style.display = "block";
            }else{
                clickextend[1].style.display = "none";
            }
        }
    })
}
for (let i=0; i<extend.length; i++){
    extend[2].addEventListener("click", function() {
        for (let i=0; i<clickextend.length; i++){
            if (clickextend[2].style.display=== "none"){
                clickextend[2].style.display = "block";
            }else{
                clickextend[2].style.display = "none";
            }
        }
    })
}
for (let i=0; i<extend.length; i++){
    extend[3].addEventListener("click", function() {
        for (let i=0; i<clickextend.length; i++){
            if (clickextend[3].style.display=== "none"){
                clickextend[3].style.display = "block";
            }else{
                clickextend[3].style.display = "none";
            }
        }
    })
}