class Mouse {
    name;
    weight;
    speed;
    status;


    constructor(name, weight, speed, status) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.status = status;
    }

    getStatus() {
        if (this.weight > 0) {
            return this.status = true;
        } else {
            return this.status = false;
        }
    }

    changeStatus(){
        if(this.weight <= 0){
            this.status = false;
        }
    }

    beingAte() {
        return this.weight--;
    }

    // greeting() {
    //         return true;
    // }
}