var mouseevent = "empty"
var lastpositonx;
var lastpositiony;

canvas = document.getElementById ("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
width_of_line = 1;
canvas.addEventListener ("mouseDown", mymousedown)

function mymousedown(e){
    color = docment.getElementById ("color").value;
    width_of_line = document.getElementsById("width_of_line").value;
    mouseevent = "mouseDown"
    


}
canvas.addEventListener ("mousemove" , mymousemove);
function mymousemove(e){
    currentpositonofmousex = e.clientX-canvas.offsetLeft;
    currentpositionofmousey = e.clientY-canvas.offsetTop;
    if (mouseevent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(lastpositonx, lastpositiony);
        ctx.lineTo(currentpositionofmousex,currentpositionofmousey);
        ctx.stroke();


    }
    lastpositonx = currentpositionofmousex 
    lastpositiony = currentpositionofmousey
}
canvas.addEventListener ("mouseup" , mymouseup);
function mymouseup(e){
    mouseevent = "mouseUp";

}
canvas.addEventListener ("mouseleave" , mymouseleave);
function mymouseleave (e){
    mouseevent = "mouseLeave";

}

