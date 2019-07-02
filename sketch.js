const { Engine, World, Bodies, Body} = Matter;
const CANVAS_WIDTH = 720,
      CANVAS_HEIGHT = 520;

var engine, world;
var ground, base; // All static bodies
var square1, square2,square3,square4, square5; // Square obstacles
var rect1, rect2, rect3, rect4; // Recatngle obstacles
var enemy1, enemy2; // Enemy's

function setup(){
  const canvas =  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2, height, width, 50);

  base = new Base(width - 250,height-35, 350, 20)

  square1 = new Obstacle(width-350,height-80,80,80);

  enemy1 = new Enemy(width-250, height-90,50,50);

  square2 = new Obstacle(width-150,height-80,80,80);

  rect1 = new Obstacle(width-250,height-120,280,15);

  square3 = new Obstacle(width-350,height-125,80,80);

  enemy2 = new Enemy(width-250,height-125,50,50);

  square4 = new Obstacle(width-150,height-125,80,80);

  rect2 = new Obstacle(width-250,height-225,280,15);

  square5 = new Obstacle(width-250,height-250,80,80);

  rect3 = new Obstacle(width-320, height-250,15,150)

  rect4= new Obstacle(width-180,height-250,15,150);

}

function draw(){
  background(0);
  Matter.Engine.update(engine);

  ground.show();

  base.show();

  square1.show();
  enemy1.show();
  square2.show();

  rect1.show();

  square3.show();
  enemy2.show();
  square4.show();

  rect2.show();

  square5.show();
  rect3.body.angle = 3.83972
  rect3.show();
  rect4.body.angle = 2.61799
  rect4.show();
}
