class Paper{
    constructor(x,y,r) {

      this.image = loadImage("paper.png");
        var options = {
            isStatic:false,
            restitution:0.7,
            friction:0.5,
            density:1
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        this.x = x;
        this.y = y;
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop();
      }
    }