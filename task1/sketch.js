function setup() {
  resizeCanvas (900, 900)
  background('hotpink');
  
  
}

function sayWord(word) {
   console.log(word)
}

function drawPlanet(x, y, radius) {
ellipse(x,y, radius, radius) 
strokeWeight(4);
}

function drawRings(x, y) {
ellipse(x,y,60, 20)
stroke('pink');
strokeWeight(9);
}

function drawTriangles(x, y) {
  triangle(x, y, 58, 20, 86, 75);
  fill('#fae');
}

function drawMoons(x, y) {
 ellipse(x,y,60, 20) 
 fill('purple');
}

function mouseClicked() {
var r = random(20, 150)
 drawPlanet(mouseX, mouseY, r);
drawMoons(mouseX, mouseY);
 drawRings(mouseX, mouseY);
drawTriangles(mouseX, mouseY)
}