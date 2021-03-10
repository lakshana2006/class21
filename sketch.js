var fixedRect, movingRect;
var car,wall;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
 car = createSprite(200, 200, 50, 80);
 car.shapeColor = "green";
 car.velocityX = 7;
  wall = createSprite(1000, 200, 20, 100);
  wall.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if (isTouching(car,wall)){
 text("touched",400,200);
}
  bounceoff(car,wall);
  drawSprites();
}
