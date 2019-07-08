class Projectile extends Ground {
  constructor(x, y, width, height){
    var options = {
      isStatic : true
    }
    this.body = Bodies.create.circle(x, y, width, height);
    World.add(world, this.body);
    this.width = 10,
    this.height = 10;
  }

  show(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push()
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    imageMode(CENTER);
    pop();
  };

}
