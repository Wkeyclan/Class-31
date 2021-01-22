class Bird extends BaseClass {
    constructor(x, y) {
        /* super() helps to transfer properties of parent class through 
        parent class constructor*/
        super(x, y, 50, 50);
        this.image = loadImage("sprites/bird.png");

        this.smoke = loadImage("sprites/smoke.png");

        this.path = []
    }
    display() {
        super.display();
        if (this.body.position.x > 200 && this.body.velocity.x > 10) {
            var position = [this.body.position.x, this.body.position.y]
            console.log(position);
            this.path.push(position);
        }
        for (var a = 0; a < this.path.length; a++) {
            image(this.smoke, this.path[a][0], this.path[a][1]);
        }
    }
    fly() {
        this.sling.bodyA = null;
    }
    attach(body) {
        this.sling.bodyA = body;
    }
}