window.onload = function pixel_animate() {
	var canvas = document.getElementById('animate_pixels');
	if (canvas.getContext) {
		var ctx = canvas.getContext('2d');
	}

	ctx.beginPath();
	ctx.moveTo(25,25);
	roundedRect(ctx,50,200,250,80,15);

	var myImageData = ctx.getImageData(50, 200, 250, 80);
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