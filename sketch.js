var bg,bg2,form,system,code,security;
var score=0;
var gun,gunImg

function preload() {
  bg = loadImage("school.jpeg");
  bg2 = loadImage("blackbg.jpeg")
  gunImg=loadImage("tommy.png")
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
  

}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 3) {
    clear()
    background(bg2)
    fill("white")
    textSize(10);
    text("YOU HAVE BEEN SELECTED TO THE ARMY!HIT THE TARGETS TO FINISH YOUR TRAINING(PRESS SPACE TO SHOOT)",100, 50);

gun=createSprite(100,450,50,50)
gun.addImage("shoot",gunImg)
gun.scale=0.15
    gun.x=World.mouseX

  }

  drawSprites()


}