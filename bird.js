class Bird {
  constructor(x, y, width, height,birdImage) {
    var options = {
      'density':1.3,
      'friction': 1.0,
      'restitution':0.5
    };
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.birdImage = birdImage;
    World.add(world, this.body);
  };
  show(){
    var pos = this.body.position;
    pos.x = mouseX;
    pos.y = mouseY;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER)
    image(this.birdImage,0, 0, this.width, this.height);
    pop();
  };
};
