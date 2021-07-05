const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground, paper1, line1, line2, line3

var smallBox, dustbinImage;

function preload(){
	dustbinImage = loadImage("dustbingreen.png")
}

function setup() {
	
canvas = createCanvas(800, 700);
engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
      var smallBox = createSprite(683,550,100,20);
	  smallBox.addImage(dustbinImage);
      smallBox.scale = 0.8

     ground = new Ground(width/2,690,900,30);
	 paper1 = new Paper(30,613);
	 dustbin1 = new Dustbin(690,665,150,20);
	 dustbin2 = new Dustbin(760,585,20,150);
	 dustbin3 = new Dustbin(610,585,20,150)
	
	

	Engine.run(engine);
}



function draw() {
  rectMode(CENTER);
  background("white");
  ground.display();
  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  drawSprites();
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.position,{x:75,y:-75});
	}
	
}
