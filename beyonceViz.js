var paper;
var padding = 10;


$(document).ready(function () {runProgram()});

function runProgram() {
    img = document.getElementById('originalImage')
    c = document.getElementById("myCanvas");
    canvasWidth = img.clientWidth;
    canvasHeight = img.clientHeight;
    paper = new Raphael(canvasWidth, 0, canvasWidth, canvasHeight);  
    {drawCanvas()};       
}  

function drawCanvas() {
  

  var ctx=c.getContext("2d");
  ctx.drawImage(img,0,0);
  var imgData=ctx.getImageData(0,0,canvasWidth,canvasHeight);
  // invert colors
  for (var i=0;i<imgData.data.length;i+=4)
    {
    imgData.data[i]=255-imgData.data[i];
    imgData.data[i+1]=255-imgData.data[i+1];
    imgData.data[i+2]=255-imgData.data[i+2];
    imgData.data[i+3]=255;
    }
  ctx.putImageData(imgData,0,0);

    for (i = 0; i < canvasWidth; i++) {
    	for (h = 0; h < canvasHeight; h++) {
    		
    	}
    }
}
