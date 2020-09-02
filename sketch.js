
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground, paper, dustbin_l, dustbin_r, dustbin_b, dustbinImage;

function preload()
{
	dustbinImage = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1500, 700);


	/*
	dustbin_bSprite=createSprite(1250, 685, 250 ,15);
	dustbin_bSprite.shapeColor=color(255)

	dustbin_lSprite=createSprite(1125, 580, 15, 225);
	dustbin_lSprite.shapeColor=color(255)

	dustbin_rSprite=createSprite(1375, 580, 15, 225);
	dustbin_rSprite.shapeColor=color(255)
	*/

	engine = Engine.create();
	world = engine.world;

	dustbin_b = Bodies.rectangle(1250, 685, 250, 15, {isStatic:true});
	World.add(world, dustbin_b);

	dustbin_l = Bodies.rectangle(1125, 580, 15, 220, {isStatic:true});
	World.add(world, dustbin_l);

	dustbin_r = Bodies.rectangle(1375, 580, 15, 220, {isStatic:true});
	World.add(world, dustbin_r);

	

	//Create the Bodies Here.
	ground = new Ground(width/2,700,width,10);
	paper = new Paper(50,650,60);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");

  imageMode(CENTER)
  image(dustbinImage, 1250,540);
  
  ground.display();
  paper.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:780,y:-770});
	}
}

