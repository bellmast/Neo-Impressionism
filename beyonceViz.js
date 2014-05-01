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
    for (i = 10; i < canvasWidth-10; i++) {
    	for (h = 10; h < canvasHeight-10; h++) {
    		paper.circle(i, h, 1).attr({"stroke":"red"})
    	}
    }
}
