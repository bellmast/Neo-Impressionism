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
            hsv = rgb2hsv(avgRed, avgGreen, avgBlue)

            filler = "hsl("+hsv.h+", "+hsv.s+"%, "+hsv.v+"%)"
            fillerRed = "rgba("+avgRed+", "+0+", "+0+", "+avgAlpha+")"
            fillerGreen = "rgba("+0+", "+avgGreen+", "+0+", "+avgAlpha+")"
            fillerBlue = "rgba("+0+", "+0+", "+avgBlue+", "+avgAlpha+")"
            //brushSet.push(paper.rect(i-2, h, 2, 12).attr({fill:fillerRed, stroke:"none"}))
            //brushSet.push(paper.rect(i, h, 2, 12).attr({fill:fillerGreen, stroke:"none"}))
            //brushSet.push(paper.rect(i+2, h, 2, 12).attr({fill:fillerBlue, stroke:"none"}))
            brushSet.push(paper.rect(i, h, 6, 12).attr({fill:filler, stroke:"none"}))

            //
            widthTracker += 6
    		widthMod = Math.floor(Math.random()*4)+2
            
    	}
    widthTracker = 0
    heightTracker += 12
    heightMod = Math.floor(Math.random()*8)+4
    }
}

function rgb2hsv () {
    var rr, gg, bb,
        r = arguments[0] / 255,
        g = arguments[1] / 255,
        b = arguments[2] / 255,
        h, s,
        v = Math.max(r, g, b),
        diff = v - Math.min(r, g, b),
        diffc = function(c){
            return (v - c) / 6 / diff + 1 / 2;
        };

    if (diff == 0) {
        h = s = 0;
    } else {
        s = diff / v;
        rr = diffc(r);
        gg = diffc(g);
        bb = diffc(b);

        if (r === v) {
            h = bb - gg;
        }else if (g === v) {
            h = (1 / 3) + rr - bb;
        }else if (b === v) {
            h = (2 / 3) + gg - rr;
        }
        if (h < 0) {
            h += 1;
        }else if (h > 1) {
            h -= 1;
        }
    }
    return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        v: Math.round(v * 100)
    };
}
