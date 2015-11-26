window.onload = function pixel_animate() {
	var canvas = document.getElementById('animate_pixels');
	if (canvas.getContext) {
		var ctx = canvas.getContext('2d');
	}

	roundedRect(ctx,100,200,350,80,15);
  var dir = true;
  shade(ctx, dir)
 
  
}

function roundedRect(ctx,x,y,width,height,radius){
  ctx.beginPath();

  ctx.arc(x,y+height/2,height/2,-Math.PI/2,Math.PI/2,true)  
  ctx.lineTo(x+width-radius,y+height);
  ctx.quadraticCurveTo(x+width,y+height,x+width,y+height-radius);
  ctx.lineTo(x+width,y+radius);
  ctx.quadraticCurveTo(x+width,y,x+width-radius,y);
  ctx.lineTo(x,y);
  
  ctx.fillStyle = "#D8D8D8"; //216,216,216
  ctx.fill();
}

function shade(ctx, dir) {
  var imageData = ctx.getImageData(0,200,450,80);
  var pixels = imageData.data;
  var numPixels = imageData.width * imageData.height;
  var norm
  var cur_col
  var cur_colex
  var norm_ex

  for (var i = 1; i < numPixels; i++) {
    if (dir) {
      cur_col = (i - 1)%imageData.width
    } else {
      cur_col = imageData.width-50 - (i - 1)%imageData.width
    }
    norm = (cur_col-1)/(imageData.width-50)

    if (Math.random()*norm > 0.35) {
      if (norm > 1) {
        norm = 1
      }
      
      pixels[i*4] = 216 - Math.round(norm*(216-39));
      pixels[(i*4) + 1] = 216 - Math.round(norm*(216-40))
      pixels[(i*4) + 2] = 216 - Math.round(norm*(216-34))
    } else if (cur_col > 100) {
      norm_ex = (cur_col - 100)/(imageData.width - 121)
      
      if (norm_ex > 1) {
        norm_ex = 1
      }
      
      pixels[i*4] = 216 - Math.round(norm_ex*(216-39));
      pixels[(i*4) + 1] = 216 - Math.round(norm_ex*(216-40))
      pixels[(i*4) + 2] = 216 - Math.round(norm_ex*(216-34))
    }
  }
  ctx.putImageData(imageData,0,200);
}
//write function to extract pixels from ctx shape