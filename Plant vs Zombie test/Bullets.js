let bullet = new Image();
bullet.src = "img/bullet.png"

class Bullets {
    width;
    height;
    x;
    y

    constructor(x,y) {
        this.width = 20;
        this.height = 20;
        this.x = x;
        this.y = y;
    }

    update() {
        ctx.beginPath();
        ctx.drawImage(bullet, this.x, this.y, this.width, this.height)
    }

    destroy(id) {
        bullets.splice(id,1)
        for (let i = 0; i < zones.length; i++) {

        }
    }

}