class Base {
  constructor(x, y, width, height,baseImage) {
    var options ={
      isStatic : true
    }
    this.body = Bodies.rectangle(x,y, width, height, options);
    this.width = width;
    this.height = height;
    this.baseImage = baseImage;
    World.add(world, this.body);
  };

  show(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y)
    rotate(angle);
    imageMode(CENTER);
    image(this.baseImage,0,0,this.width, this.height)
    pop()
  }
}
