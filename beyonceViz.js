var paper;
var canvasWidth = 800;
var canvasHeight = 700;
var padding = 10;

$(document).ready(function () {runProgram()});

function runProgram() {
    paper = new Raphael(document.getElementById('canvas_container'), canvasWidth, canvasHeight);  
    {drawCanvas()};       
}  

function drawCanvas() {
    paper.circle(150, 150, 10)
}
