function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('#000');
  circle(width/2, height/2, sin(frameCount*0.01)*300);
}