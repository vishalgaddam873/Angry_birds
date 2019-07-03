const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint} = Matter;
const CANVAS_WIDTH = 720,
      CANVAS_HEIGHT = 520;

var engine, world;
var ground, base; // All static bodies
var square1, square2,square3,square4, square5; // Square obstacles objects
var rect1, rect2, rect3, rect4; // Recatngle obstacles objects
var enemy1, enemy2; // Enemy objects
var bird; //Bird object
var bgImage,groundImage, baseImage, birdImage, squareWood, rectWood, enemyImage; // All Sprite's

function preload(){
  bgImage = loadImage('sprites/bg.png');
  groundImage = loadImage('sprites/ground.png');
  baseImage = loadImage('sprites/base.png')
  birdImage = loadImage('sprites/bird.png');
  squareWood = loadImage('sprites/wood1.png');
  rectWood = loadImage('sprites/wood2.png');
  enemyImage = loadImage('sprites/enemy.png');
}

function setup(){
  const canvas =  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  engine = Engine.create();
  world = engine.world;

  // Ground object
  ground = new Ground(width/2, height, width, 50, groundImage);

  // Base for obstacles in brown color
  base = new Base(width - 250,height-35, 350, 20, baseImage)

  // left Square obstacle
  square1 = new Obstacle(width-350,height-80,80,80,squareWood);

  // Lower Middle Enemy
  enemy1 = new Enemy(width-250, height-90,50,50,enemyImage);

  // Right Square Obstacle
  square2 = new Obstacle(width-150,height-80,80,80,squareWood);

  // Lower Rectangle obstacle
  rect1 = new Obstacle(width-250,height-120,280,15,rectWood);

  // Middle Square obstacle
  square3 = new Obstacle(width-350,height-125,80,80,squareWood);

  // Middle Enemy
  enemy2 = new Enemy(width-250,height-125,50,50,enemyImage);

  // Right Square Obstacle
  square4 = new Obstacle(width-150,height-125,80,80,squareWood);

  // Upper Rectangle Obstacle
  rect2 = new Obstacle(width-250,height-225,280,15,rectWood);

  // Upper Middle Square
  square5 = new Obstacle(width-250,height-250,80,80,squareWood);

  // Left Rod
  rect3 = new Obstacle(width-320, height-250,15,150,rectWood)

  // Right Rod
  rect4= new Obstacle(width-180,height-250,15,150,rectWood);

  // Bird Object
  bird = new Bird(50,height-400,50,50,birdImage);
}

function draw(){
  background(bgImage);
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

  bird.show();
}
