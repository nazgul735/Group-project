var i = 0;
var image = [];
var time = 40000;

images[0] = '../img/imagesslider/img1.jpg';
image[1] =  '../img/imagesslider/img2.jpg'
image[2] = '../img/imagesslider/img3.jpg'
  

function changeImg(){
  document.img.src = image[i];

  if(i < image.lengt - 1){
    i++;
  } else{
    i = 0;
  }

  setTimeout("changeImg()"), time)
}
window.onload = changeImg();



