
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5
var sling1,sling2,sling3,sling4,sling5
var roof

var engine,world
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof=new Roof(400,200,800,20)
bob1=new Bob(500,500,50)
bob2=new Bob(450,500,50)
bob3=new Bob(400,500,50)
bob4=new Bob(350,500,50)
bob5=new Bob(300,500,50)
sling1=new Rope(bob1.body,{x:500, y:200})
sling2=new Rope(bob2.body,{x:450, y:200})
sling3=new Rope(bob3.body,{x:400, y:200})
sling4=new Rope(bob4.body,{x:350, y:200})
sling5=new Rope(bob5.body,{x:300, y:200})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  Engine.update(engine)
 
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  sling1.display()
  sling2.display()
  sling3.display()
  sling4.display()
  sling5.display()
 
  drawSprites();
 
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-100});
  }
  }


