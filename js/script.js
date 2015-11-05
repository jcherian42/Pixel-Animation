window.onload = function pixel_animate() {
	var canvas = document.getElementById('animate_pixels');
	if (canvas.getContext) {
		var ctx = canvas.getContext('2d');
	}

	roundedRect(ctx,50,200,250,80,15);

 
  var imageData = ctx.getImageData(0,200,300,80);
  var pixels = imageData.data;
  var numPixels = imageData.width * imageData.height;
  for (var i = 0; i < numPixels; i++) {
    if (i%2 == 0) {
      pixels[i*4] = 39;
      pixels[(i*4) + 1] = 40;
      pixels[(i*4) + 2] = 34;

    }
  }
  
  ctx.putImageData(imageData,0,200);
}



function roundedRect(ctx,x,y,width,height,radius){
  ctx.beginPath();

  ctx.arc(x,y+height/2,height/2,-Math.PI/2,Math.PI/2,true)  
  ctx.lineTo(x+width-radius,y+height);
  ctx.quadraticCurveTo(x+width,y+height,x+width,y+height-radius);
  ctx.lineTo(x+width,y+radius);
  ctx.quadraticCurveTo(x+width,y,x+width-radius,y);
  ctx.lineTo(x,y);
  
  ctx.fillStyle = "#D8D8D8";
  ctx.fill();
}

//write function to extract pixels from ctx shape