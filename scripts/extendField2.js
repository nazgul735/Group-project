const extend = document.getElementsByClassName("field_header");
const clickextend = document.getElementsByClassName("field_text");

function extendField(){
    for (let i=0; i<clickextend.length; i++){
        if (clickextend[0].style.display=== "none"){
                clickextend[0].style.display = "block";
        } else {
                clickextend[0].style.display = 'none';
        } 
    }
};

