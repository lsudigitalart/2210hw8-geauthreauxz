var canvasWidth = 500;
var canvasHeight = 500;
var midX = canvasWidth/2;       // x center point
var midY = canvasHeight/2;      // y center point

var spinAnim = 0;             // spinRect animation frame
var rectGrowth = 0;
var rectActivate = 0;

function setup() {
  createCanvas(canvasWidth,canvasHeight);
  background(150,150,150);
}

function draw() {
  background(150,150,150);
  if (rectActivate == 1) {
    rectMode(CENTER);
    growRect(mouseX,mouseY,rectGrowth);
    rectGrowth++;
  }
}

function mouseClicked() {
  rectActivate = 1;
}

function spinRect(w,h, animFrame) {
  angleMode(DEGREES);
  rectMode(CENTER);
  rect(midX,midY, w,h);
}



function growRect(x,y,growth) {
  //fill(r,g,b);
  rect(x,y,20 + growth,10 + growth)
}
