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
    paper.circle(150, 150, 10)
}
