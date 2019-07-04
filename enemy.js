class Enemy {
  constructor(x, y, width, height,enemyImage) {
    var options = {
      'density' : 1.3,
      'friction': 1.0,
      'restitution':0.5
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.enemyImage = enemyImage;
    World.add(world, this.body);
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
