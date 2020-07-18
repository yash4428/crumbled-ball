var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	ground = new Ground(600,height,1200,20)
  ball = new Ball(100,600,30)
  dustbin = new Dustbin(680,680,150,20)
  dustbin2 = new Dustbin(600,610,20,150)
  dustbin3 = new Dustbin(760,610,20,150)


  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  ball.display();
  dustbin.display();
  dustbin2.display();
  dustbin3.display();

  
  drawSprites();
 
}
 function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ballObject.body,ballObject.body.position,{x:85,y:-85});
  }
  
}


