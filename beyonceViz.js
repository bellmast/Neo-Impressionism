var paper;
var padding = 10;


$(document).ready(function () {runProgram()});

function runProgram() {
    img = document.getElementById('originalImage')
    canvasWidth = img.clientWidth;
    canvasHeight = img.clientHeight;
    paper = new Raphael(canvasWidth, 0, canvasWidth, canvasHeight);  
    {drawCanvas()};       
}  

function drawCanvas() {
    for (i = 0; i < canvasWidth; i++) {
    	for (h = 0; h < canvasHeight; h++) {
    		paper.circle(i, h, 1).attr({"stroke":"red"})
    	}
    }
}
