var drawing = [];
var currentPath= [];
function setup(){
canvas = createCanvas(500,500);
canvas.mousePressed(startPath);
//canvas.mouseReleased(endPath);
}

function startPath(){
    currentPath = [];
    drawing.push(currentPath);
}

//function endPath(){
    
//}

function draw(){
background(0);
if (mouseIsPressed) {
    var point = {
     x:mouseX,
     y: mouseY
    }
    currentPath.push(point);
}

stroke(255);
strokeWeight(10);
noFill();
for (var i = 0; i < drawing.length;i++){
    var path = drawing[i];
    beginShape();
for (var j = 0; j< path.length;j++){    
vertex(path[j].x,path[j].y)
}
endShape();
}
drawSprites();
}

