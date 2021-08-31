var bg,bath,eat,gym,brush,drink,move,iss,sleep;
var astronaut;

function preload(){
  bg = loadImage("images/iss.png");
  bath = loadAnimation("images/bath1.png,bath2.png");
  eat = loadAnimation("images/eat1.png,eat2.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym1.png,gym12.png");
  drink = loadAnimation("images/drink1.png,drink2.png");
  sleep = loadAnimation("images/sleep.png");
  move = loadAnimation("images/move1.png,move2.png");
}


 function setup(){

  createCanvas(600,500);
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;
 }





function draw() {
background(bg);
drawSprites();

textSize(20);
fill("white")
text("Instructions:",20, 35);
textSize(15);
text("Up Arrow = Brushing",20, 55);
text("Down Arrow = Gymming",20, 70);
text("Left Arrow = Eating",20, 85);
text("Right Arrow = Bathing",20, 100);
text("m key = Moving",20, 115);

edges=createEdgeSprites();
astronaut.bounceOff(edges);

if(keyDown("UP_ARROW")){
  astronaut.addAnimation("brushing", brush);
  astronaut.changeAnimation("brushing");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gymming", gym);
  astronaut.changeAnimation("gymming");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("eating", eat);
  astronaut.changeAnimation("eating");
  astronaut.x = 150;
  astronaut.y = 350;
  astronaut.velocityX = 0.5;
  astronaut.velocityY = 0.5;
}

if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("bathing", bath);
  astronaut.changeAnimation("bathing");
  astronaut.x = 300;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

if(keyDown("m")){
  astronaut.addAnimation("moving", move);
  astronaut.changeAnimation("moving");
  astronaut.velocityX = 1;
  astronaut.velocityY = 1;
}




}
