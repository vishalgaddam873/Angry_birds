class Sling extends Ground {
  constructor(x, y, width, height, slingImage) {
    super(x, y, width, height);
    this.slingImage = slingImage;
  }

  show(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    imageMode(CENTER);
    image(this.slingImage, 0, 0, this.width, this.height);
    pop();
  }
}
