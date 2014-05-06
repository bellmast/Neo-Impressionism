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
        

        

        paper1 = new Raphael(canvasWidth+10, 7, canvasWidth, canvasHeight);
        paper2 = new Raphael(canvasWidth+10+canvasWidth+2, 7, canvasWidth, canvasHeight)
        paper3 = new Raphael(5, canvasHeight+10, canvasWidth, canvasHeight);
        paper4 = new Raphael(5+canvasWidth+2, canvasHeight+10, canvasWidth, canvasHeight)
        {drawCanvas()};       
    }
    
    
    

}  

function drawCanvas() {
  
    heightMod = 6
    widthMod = 12
    widthTracker = 0
    heightTracker = 0
    for (h = 0; h < canvasHeight; h+=12) {
        for (i = 0; i < canvasWidth; i+=6) {
            
            imgData=context.getImageData(widthTracker, heightTracker, 6, 12);

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
            
            filler = new RGBColour(avgRed, avgGreen, avgBlue)
            

            hsl = filler.getHSL()
            newH = hsl.h
            newS = hsl.s
            newL = hsl.l
            if (newL < 50) {
                floorAdd = 50 - newL
                newL += floorAdd
            }
            if (newS < 75) {
                floorAdd2 = 75 - newS
                newS += floorAdd2
            }
            if (newL < 25) {
                floorAdd3 = 25 - newL
                newL2 += floorAdd3
            }
            if (newS < 25) {
                floorAdd4 = 25 - newS
                newS2 += floorAdd4
            }
            filler = new HSLColour(newH, newS, newL)
            filler2 = new HSLColour(newH, newS2, newL2)
            rgb = filler.getRGB()
            rgb2 = filler2.getRGB()
            filler = "rgb("+rgb.r+", "+rgb.g+", "+rgb.b+")"
            filler2 = "rgb("+rgb2.r+", "+rgb2.g+", "+rgb2.b+")"
            fillerP = "rgb("+avgRed+", "+avgGreen+", "+avgBlue+")"
            fillerRed = "rgb("+avgRed+", "+0+", "+0+")"
            fillerGreen = "rgb("+0+", "+avgGreen+", "+0+")"
            fillerBlue = "rgb("+0+", "+0+", "+avgBlue+")"
            paper1.rect(i, h, 6, 12).attr({fill:fillerP, stroke:"none"})
            paper2.rect(i-2, h, 2, 12).attr({fill:fillerRed, stroke:"none"})
            paper2.rect(i, h, 2, 12).attr({fill:fillerGreen, stroke:"none"})
            paper2.rect(i+2, h, 2, 12).attr({fill:fillerBlue, stroke:"none"})
            paper3.rect(i, h, 6, 12).attr({fill:filler, stroke:"none"})
            paper4.rect(i, h, 6, 12).attr({fill:filler2, stroke:"none"})

            //
            widthTracker += 6
            widthMod = Math.floor(Math.random()*4)+2
            
        }
    widthTracker = 0
    heightTracker += 12
    heightMod = Math.floor(Math.random()*8)+4
    }
}
