const { Engine, World, Bodies, Body} = Matter;
const CANVAS_WIDTH = 720,
      CANVAS_HEIGHT = 520;

var engine, world;
var ground // All static bodies
var box1, box2;

function setup(){
  const canvas =  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  }
  ground = Bodies.rectangle(width/2, height, width, 100, options);

  World.add(world, ground);

  box1  = new Obstacle(330,150,50,80);
  box2  = new Obstacle(325,200,50,80);

}

function draw(){
  background(0);
  Matter.Engine.update(engine);

  noStroke(255);
  fill(170);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width, 100);

  box1.show();
  box2.show();
}
