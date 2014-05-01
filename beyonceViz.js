var paper;
var canvasWidth = 150;
var canvasHeight = 150;
var padding = 10;

$(document).ready(function () {runProgram()});

function runProgram() {
    paper = new Raphael(document.getElementById('canvas_container'), canvasWidth, canvasHeight);  
    {drawCanvas()};       
}  

function drawCanvas() {
    paper.circle(150, 150, 10)
}
