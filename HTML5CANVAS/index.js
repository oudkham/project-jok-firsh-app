var canvas = document.getElementById("myCanvas");

var ctx = canvas.getContext("2d");
ctx.font = "16px Arial"
canvas.addEventListener("mousemove", function(e){
    var cRect = canvas.getBoundingClientRect();
    var canvasX = Math.round(e.clientX - cRect.left);
    var canvasY = Math.round(e.clientY - cRect.top);
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
    ctx.fillText("X: "+canvasX+", Y: "+canvasY, 10, 20);
});