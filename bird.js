class Bird {
  constructor(x, y, width, height,birdImage) {
    var options = {
      'density' : 3.0,
      'friction': 0.5,
      'restitution':0.8
    };
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.birdImage = birdImage;
    World.add(world, this.body);
  };
  show(){
    var pos = this.body.position;
    // pos.x = mouseX;
    // pos.y = mouseY;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    imageMode(CENTER)
    image(this.birdImage,0, 0, this.width, this.height);
    pop();
  };
};
