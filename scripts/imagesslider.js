<script>
  var i = 0;
  var image = [];
  var time = 40000;

  images[0] = 'img1.jpg';
  image[1] =
  image[2] =
  image[3] =
  image[4] =
  image[5] =
  image[6] =

  function vhangeImg(){
    document.img.src = image[i];

    if(i < image.lengt - 1){
      i++;
    } else{
      i = 0;
    }

    setTimeout("changeImg()"), time)
  }

  window.onload = changeImg;


</script>

<img name="img" width="100%" height="100%">
