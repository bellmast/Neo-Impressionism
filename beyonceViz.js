var paper;
var padding = 10;


$(document).ready(function () {runProgram()});

function runProgram() {
    img = document.getElementById('originalImage')
    canvasWidth = img.clientWidth;
    canvasHeight = img.clientHeight;
    paper = new Raphael(canvasWidth, canvasHeight, canvasWidth, canvasHeight);  
    {drawCanvas()};       
}  

function drawCanvas() {
    for (i = canvasWidth; i < canvasWidth*2; i++) {
    	for (h = canvasHeight; h < canvasHeight*2; h++) {
    		paper.circle(i, h, 1).attr("stroke"="red")
    	}
    }
}
