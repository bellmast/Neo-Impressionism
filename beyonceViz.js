var paper;
var canvasWidth = 300;
var canvasHeight = 300;
var padding = 10;

$(document).ready(function () {runProgram()});

function runProgram() {
    paper = new Raphael(document.getElementById('canvas_container'), canvasWidth, canvasHeight);  
    {drawCanvas()};       
}  

function drawCanvas() {
    for (i = 0; i < canvasWidth; i++) {
    	for (h = 0; h < canvasHeight; h++) {
    		paper.circle(i, h, 1).attr("stroke"="red")
    	}
    }
}
