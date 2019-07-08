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

  show() {
    if (this.sling.bodyB) {
      stroke("#301A03");
      strokeWeight(5);
      const posA = this.sling.pointA;
      const posB = this.sling.bodyB.position;
      line(posB.x - 20, posB.y, posA.x, posA.y);
      bird.show();

      image(slingImage3, posB.x-30, posB.y-10,15,30)
      line(posB.x -20, posB.y + 5, posA.x - 30, posA.y+20);
    }
  }

  attach(body) {
    this.sling.bodyB = body;
  }

}
