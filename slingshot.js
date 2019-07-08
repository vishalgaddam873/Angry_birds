class SlingShot {
  constructor(x, y, body) {
    const options = {
      //Elastic
      pointA: {
        x: x,
        y: y
      },
      bodyB: body,
      stiffness: 0.05
    }
    this.sling = Constraint.create(options);
    World.add(world, this.sling);
  }

  fly() {

    this.sling.bodyB = null;
  }

  shot(){
    stroke("#301A03")
    strokeWeight(5)
    line(mouseX, mouseY, 275,235)
    line(mouseX-3,mouseY+5,235,235)
    image(slingImage3, mouseX-10, mouseY-10,20,20)
  }

  show() {
    if (this.sling.bodyB) {
      stroke("#301A03");
      strokeWeight(5);
      const posA = this.sling.pointA;
      const posB = this.sling.bodyB.position;
      line(posB.x - 20, posB.y - 5, posA.x, posA.y);
      image(slingImage3, posB.x-30, posB.y-10,20,20)
      bird.show()
      line(posB.x -20, posB.y + 5, posA.x - 30, posA.y+20);
    }
  }

  attach(body) {
    this.sling.bodyB = body;
  }

}
