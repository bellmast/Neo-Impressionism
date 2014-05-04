var paper;
var padding = 10;


$(document).ready(function () {runProgram()});

function runProgram() {
    img = document.getElementById('originalImage')
    c = document.getElementById("myCanvas");
    
    canvasWidth = 600;
    canvasHeight = 600;
    ctx=c.getContext("2d");

    

    paper = new Raphael(canvasWidth, 0, canvasWidth, canvasHeight);  
    {drawCanvas()};       
}  

function drawCanvas() {
  

    heightMod = 6
    widthMod = 12
    for (h = 0; h < 50; h+=heightMod) {
    	for (i = 0; i < 50; i+=widthMod) {
            
            imgData=ctx.getImageData(0,0,widthMod,heightMod);

            redCount = 0
            greenCount = 0
            blueCount = 0
            alphaCount = 0
            count = 0

            for (k = 0; k < imgData.data.length; k += 4) {
                redCount += imgData[k]
                greenCount += imgData[k+1]
                blueCount += imgData[k+2]
                alphaCount += imgData[k+3]
                count += 1
            }
            avgRed = redCount/count
            avgGreen = greenCount/count
            avgBlue = blueCount/count
            avgAlpha = alphaCount/count

            paper.rect(canvasWidth+i, h, widthMod, heightMod).attr({fill:"rgba(avgRed, avgGreen, avgBlue, avgAlpha)", stroke:"none"})


    		widthMod = Math.floor(Math.random()*4)+2
    	}
    heightMod = Math.floor(Math.random()*8)+4
    }
}
