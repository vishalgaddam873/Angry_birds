class Enemy extends Obstacle{
  constructor(x, y, width, height,enemyImage) {
    super(x, y, width, height);
    this.enemyImage = enemyImage;
  }
  show(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    imageMode(CENTER)
    image(this.enemyImage,0,0,this.width, this.height)
    pop();
  }
}
