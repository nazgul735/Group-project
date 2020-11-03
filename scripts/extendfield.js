var click1 = document.getElementById("befaring_field_header");
click1.addEventListener("click", extendField1);
var click2 = document.getElementById("utleie_field_header");
click2.addEventListener("click", extendField2);
var click3 = document.getElementById("innflytting_field_header");
click3.addEventListener("click", extendField3);
var click4 = document.getElementById("oppfolging_field_header");
click4.addEventListener("click", extendField4);
var click5 = document.getElementById("juridisk_field_header");
click5.addEventListener("click", extendField5);
var click6 = document.getElementById("mypage_field_header");
click6.addEventListener("click", extendField6);
var click7 = document.getElementById("economy_field_header");
click7.addEventListener("click", extendField7);
var click8 = document.getElementById("befaringafter_field_header");
click8.addEventListener("click", extendField8);
var click9 = document.getElementById("utflytting_field_header");
click9.addEventListener("click",extendField9);
var click10 = document.getElementById("first_field_header");
click10.addEventListener("click", extendField1);
var click11=document.getElementById("second_field_header");
click11.addEventListener("click", extendField2);
var click12=document.getElementById("third_field_header");
click12.addEventListener("click",extendField3);
var click13=document.getElementById("fourth_field_header");
click13.addEventListener("click", extendField4);


function extendField1(){
    var extend = document.getElementsByClassName("field_text");
    if (extend[0].style.display === "none"){
        (extend[0].style.display = "block");
    } else {
        extend[0].style.display = "none";
    }
}
function extendField2(){
    var extend = document.getElementsByClassName("field_text");

    if (extend[1].style.display === "none"){
        extend[1].style.display ="block";
    } else {
        extend[1].style.display ="none";
    }
}
function extendField3(){
    var extend = document.getElementsByClassName("field_text");
    if (extend[2].style.display === "none"){
        extend[2].style.display ="block";
    } else {
        extend[2].style.display ="none";
    }
}
function extendField4(){
    var extend = document.getElementsByClassName("field_text");
    if (extend[3].style.display === "none"){
        extend[3].style.display ="block";
    } else {
        extend[3].style.display ="none";
    }
}
function extendField5(){
    var extend = document.getElementsByClassName("field_text");
    if (extend[4].style.display === "none"){
        extend[4].style.display ="block";
    } else {
        extend[4].style.display ="none";
    }
}
function extendField6(){
    var extend = document.getElementsByClassName("field_text");
    if (extend[5].style.display === "none"){
        extend[5].style.display ="block";

    } else {
        extend[5].style.display ="none";
    }
}
function extendField7(){
    var extend = document.getElementsByClassName("field_text");
    if (extend[6].style.display === "none"){
        extend[6].style.display ="block";
    } else {
        extend[6].style.display ="none";
    }
}
function extendField8(){
    var extend = document.getElementsByClassName("field_text");
    if (extend[7].style.display === "none"){
        extend[7].style.display ="block";
    } else {
        extend[7].style.display ="none";
    }
}
function extendField9(){
    var extend = document.getElementsByClassName("field_text");
    if (extend[8].style.display === "none"){
        extend[8].style.display ="block";
    } else {
        extend[8].style.display ="none";
    }
}