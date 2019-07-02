const { Engine, World, Bodies, Body} = Matter;
const CANVAS_WIDTH = 600,
      CANVAS_HEIGHT = 400;

var engine, world;
var ground;
var obstacle1, obstacle2;
function setup(){
  const canvas =  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  engine = Engine.create();
  world = engine.world;

  var ground_options = {
    isStatic:true
  }
  ground = Bodies.rectangle(width/2, height, width, 100, ground_options)
  World.add(world, ground);

  var box_options = {
    restitution : 1.0
  }
  box = Bodies.rectangle(150, 100, 50, 50, box_options)
  World.add(world, box)

  obstacle1 = new Obstacle(200,10,40,80);
  obstacle2 = new Obstacle(190,130,40,80);

}

function draw(){
  background(0);
  Matter.Engine.update(engine);
  noStroke(255);
  fill(170);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width, 100);

  obstacle1.show();
  obstacle2.show();

}
