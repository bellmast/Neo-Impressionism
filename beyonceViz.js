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
    for (h = 0; h < canvasHeight; h+=12) {
    	for (i = 0; i < canvasWidth; i+=12) {
            
            imgData=context.getImageData(widthTracker, heightTracker, 12, 12);

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

            rPrime = avgRed/255
            gPrime = avgGreen/255
            bPrime = avgBlue/255

            key = 1-Math.max(rPrime, gPrime, bPrime)
            cyan = (1-rPrime-key) / (1-key)
            magenta = (1-gPrime-key) / (1-key)
            yellow = (1-bPrime-key) / (1-key)

            filler = "rgba("+avgRed+", "+avgGreen+", "+avgBlue+", "+255+")"
            fillerRed = "rgba("+avgRed+", "+0+", "+0+", "+255+")"
            fillerGreen = "rgba("+0+", "+avgGreen+", "+0+", "+255+")"
            fillerBlue = "rgba("+0+", "+0+", "+avgBlue+", "+255+")"
            brushSet.push(paper.rect(i, h, 3, 12).attr({fill:key, stroke:"none"}))
            brushSet.push(paper.rect(i+3, h, 3, 12).attr({fill:cyan, stroke:"none"}))
            brushSet.push(paper.rect(i+6, h, 3, 12).attr({fill:magenta, stroke:"none"}))
            brushSet.push(paper.rect(i+9, h, 3, 12).attr({fill:yellow, stroke:"none"}))
            //brushSet.push(paper.rect(i, h, 6, 12).attr({fill:filler, stroke:"none"}))

            //
            widthTracker += 6
    		widthMod = Math.floor(Math.random()*4)+2
            
    	}
    widthTracker = 0
    heightTracker += 12
    heightMod = Math.floor(Math.random()*8)+4
    }
}
