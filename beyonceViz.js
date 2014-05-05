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
    for (h = 0; h < 100; h+=6) {
    	for (i = 0; i < 100; i+=12) {
            
            imgData=context.getImageData(widthTracker, heightTracker, 12, 6);

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
            fillerRed = "rgba("+avgRed+", "+0+", "+0+", "+avgAlpha+")"
            fillerGreen = "rgba("+0+", "+avgGreen+", "+0+", "+avgAlpha+")"
            fillerBlue = "rgba("+0+", "+0+", "+avgBlue+", "+avgAlpha+")"
            //brushSet.push(paper.rect(i, h, widthMod, heightMod).attr({fill:filler, stroke:"none"}))
            brushSet.push(paper.circle(i-4, h, 2)).attr({fill:fillerRed, stroke:"none"})
            brushSet.push(paper.circle(i, h, 2)).attr({fill:fillerGreen, stroke:"none"})
            brushSet.push(paper.circle(i+4, h, 2)).attr({fill:fillerBlue, stroke:"none"})
            //
            widthTracker += widthMod
    		widthMod = Math.floor(Math.random()*4)+2
            
    	}
    widthTracker = 0
    heightTracker += heightMod
    heightMod = Math.floor(Math.random()*8)+4
    }
}
