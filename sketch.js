const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var ground;
var world;
//var ball;
//var ball2;
var box1;
var box2;
var box3;

function setup() {
  createCanvas(400,400);
 
  engine = Engine.create();
  world = engine.world;
 /* var ball_options = {
    restitution : 0.8
  }
  var ball2_options = {
    restitution : 1
  }*/
  
 ground = new Ground(200,380,400,20);

 /* ball = Bodies.circle(200,200,25,ball_options);
  World.add(world,ball);

  ball2 = Bodies.circle(100,200,25,ball2_options);
  World.add(world,ball2);*/

  box1 = new Box(200,200,50,50);
  box2 = new Box(215,100,20,55);
  //box3 = new Box(200,50,30,30);
}

function draw() {
  background("black");  
 
  Engine.update(engine);
  
  
 /* fill("red");

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,25,25);

  fill("violet");
  ellipseMode(RADIUS);
  ellipse(ball2.position.x,ball2.position.y,25,25);*/
  box1.display();
  box2.display();
  //box3.display();

  ground.display();

}