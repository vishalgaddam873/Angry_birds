const { Engine, World, Bodies, Body} = Matter;
const CANVAS_WIDTH = 1280,
      CANVAS_HEIGHT = 720;

var engine, world;
var ground, base; // All static bodies
var square1, square2,square3,square4, square5; // Square obstacles
var rect1, rect2, rect3, rect4; // Recatngle obstacles

function setup(){
  const canvas =  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  engine = Engine.create();
  world = engine.world;

  var ground_options = {
    isStatic:true
  }
  ground = Bodies.rectangle(width/2, height, width, 50, ground_options)
  World.add(world, ground);

  var box_options = {
    restitution : 1.0
  }
  box = Bodies.rectangle(150, 100, 50, 50, box_options)
  World.add(world, box)

  base = new Base(width - 250,height-35, 350, 20)

  square1 = new Obstacle(width-350,height-80,80,80);
  square2 = new Obstacle(width-150,height-80,80,80);
  rect1 = new Obstacle(width-250,height-120,280,10);
  square3 = new Obstacle(width-350,height-123,80,80);
  square4 = new Obstacle(width-150,height-123,80,80);
  rect2 = new Obstacle(width-250,height-125,280,10);
  square5 = new Obstacle(width-250,height-150,80,80);
  // rect3 = new Obstacle(width-250,height-125,280,10);
  //
  // rect4 =




}

function draw(){
  background(0);
  Matter.Engine.update(engine);
  noStroke(255);
  fill(170);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width, 50);
  base.show();
  square1.show();
  square2.show();
  rect1.show();
  square3.show();
  square4.show();
  rect2.show()
  square5.show()
}
