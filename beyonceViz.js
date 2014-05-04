var paper;
var padding = 10;


$(document).ready(function () {runProgram()});

function runProgram() {
    document.getElementById("originalImage").onload = function() {
        canvas = document.getElementById("myCanvas");
        context = canvas.getContext("2d");
        img = document.getElementById('originalImage');
        context.drawImage(img, 0, 0)
        canvasWidth = 600;
        canvasHeight = 600;
        

        

        paper = new Raphael(10, canvasHeight+10, canvasWidth, canvasHeight);  
        {drawCanvas()};       
    }
    
    
    

}  

function drawCanvas() {
  
    brushSet = paper.set()
    heightMod = 6
    widthMod = 12
    widthTracker = 0
    heightTracker = 0
    for (h = 0; h < 50; h+=heightMod) {
    	for (i = 0; i < 50; i+=widthMod) {
            
            imgData=context.getImageData(widthTracker, heightTracker, widthMod, heightMod);

            redCount = 0
            greenCount = 0
            blueCount = 0
            alphaCount = 0
            count = 0

            for (k = 0; k < imgData.data.length; k += 4) {
                redCount += imgData.data[k]
                greenCount += imgData.data[k+1]
                blueCount += imgData.data[k+2]
                alphaCount += imgData.data[k+3]
                count += 1
            }
            avgRed = redCount/count
            avgGreen = greenCount/count
            avgBlue = blueCount/count
            avgAlpha = alphaCount/count
            filler = "rgba("+avgRed+", "+avgGreen+", "+avgBlue+", "+avgAlpha+")"
            brushSet.push(paper.rect(i, h, widthMod, heightMod).attr({fill:filler, stroke:"none"}))

            //
            widthTracker += widthMod
    		widthMod = Math.floor(Math.random()*4)+2
            
    	}
    heightTracker += heightMod
    heightMod = Math.floor(Math.random()*8)+4
    }
}
