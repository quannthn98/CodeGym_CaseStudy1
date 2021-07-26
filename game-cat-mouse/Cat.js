class Cat {
    name;
    weight;
    speed;
    maxSpeed;
    normalSpeed;
    status;

    constructor(name, weight, speed) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.normalSpeed = speed
        this.maxSpeed = speed * 2

    }

    greeting() {
        return alert('Hi im Tom, i want some cat');
    }

    eatMouse(mouse) {
        if (mouse.getStatus()) {
            this.weight++;
            mouse.beingAte();
            mouse.changeStatus();
        } else {
            alert('This mouse is dead');
            this.speed = this.normalSpeed;
        }
    }

    catchMouse(mouse) {
        this.speed = this.maxSpeed;
        if (this.maxSpeed > mouse.speed) {
            this.eatMouse(mouse)
        } else {
            console.log('I am too slow, can not catch that mouse')
        }
    }

    // detectMouse() {
    //     let isNoMouseAlive = false;
    //     let isNoMouseGreeting = false;
    //     for (let i = 0; i < mouseList.length; i++) {
    //         if (mouseList[i].greeting() && mouseList[i].status == true) {
    //             this.catchMouse(mouseList[i])
    //             isNoMouseGreeting = false;
    //             isNoMouseAlive = false;
    //         }
    //     }
    //
    // }

}