let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d");
let balance = 5000;

let myPlayGround = new Image();
myPlayGround.src = "img/backGround.jpg"

let plants = [];
let zombies = [];
let bullets = [];
let sunFlowers = [];
let money = [];
let walls = [];

let defenders = [plants,sunFlowers,walls]

let selected;
let isSelected = false;

document.getElementById("balance").innerText = balance;

let playGround = {
    width: canvas.width,
    height: canvas.height,

    start: function () {
        this.intervalOfUpdate = setInterval(updateGame, 20);
        this.intervalOfNewZombies = setInterval(newZombies, 5000);
        this.intervalOfDetectZombies = setInterval(detectZombies, 1000);
        this.intevalOfGenerateSun = setInterval(generateSun, 3000);
        this.intervalOfZombiesAttack = setInterval(zombieAttack, 500)
    },

    drawBackground: function () {
        ctx.beginPath();
        ctx.drawImage(myPlayGround, 0, 0, this.width, this.height);
    },

    clear: function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    },

    stop: function () {
        clearInterval(this.intervalOfUpdate);
        clearInterval(this.intervalOfNewZombies);
        clearInterval(this.intervalOfDetectZombies);
        clearInterval(this.intevalOfGenerateSun);
        clearInterval(this.intervalOfZombiesAttack)
    }
}


function updateGame() {
    document.getElementById("balance").innerText = balance;
    playGround.clear();
    checkZombiesHits();
    playGround.drawBackground();

    for (let i = 0; i < bullets.length; i++) {
        bullets[i].x += 5;
        bullets[i].update();
    }

    for (let i = 0; i < plants.length; i++) {
        plants[i].update();
    }

    for (let i = 0; i < zombies.length; i++) {
        zombies[i].x -= zombies[i].speed;
        zombies[i].update();
    }

    for (let i = 0; i < sunFlowers.length; i++) {
        sunFlowers[i].update();
    }

    for (let i = 0; i < walls.length; i++) {
        walls[i].update();
    }

    for (let i = 0; i < money.length; i++) {
        money[i].update();
    }

}

function startGame() {
    playGround.clear();
    playGround.start();
}

//Add new zombies at random Lines
function newZombies() {
    let number = Math.floor(Math.random() * 5 + 0)
    zombies.push(new Zombie(1100, lines[number].y))
}


//Place Defenders
function changeSelected(id) {
    selected = id;
    isSelected = true;
}

canvas.addEventListener('click', function (e) {
    let x = e.offsetX;
    let y = e.offsetY;
    if (isSelected) {
        for (let i = 0; i < zones.length; i++) {
            if (x > zones[i].x && x < zones[i].x + zones[i].width && y > zones[i].y && y < zones[i].y + zones[i].height && zones[i].available === true) {
                switch (selected) {
                    case 0:
                        if (balance >= 100) {
                            plants.push(new Plant(zones[i].x + 20, zones[i].y, i));
                            balance -= 100;
                            zones[i].available = false;
                        }
                        break;
                    case 1:
                        if (balance >= 50) {
                            sunFlowers.push(new SunFlower(zones[i].x + 20, zones[i].y, i));
                            balance -= 50;
                            zones[i].available = false;
                        }
                        break;
                    case 2:
                        if (balance >= 50) {
                            walls.push(new Wall(zones[i].x + 20, zones[i].y, i));
                            balance -= 50;
                            zones[i].available = false;
                        }
                }
                isSelected = false;

            }
        }
    }

}, false)

// Find zombies and attack
function detectZombies() {
    for (let i = 0; i < plants.length; i++) {
        plants[i].detectZombies();
    }
}

function checkZombiesHits() {
    for (let i = 0; i < zombies.length; i++) {
        for (let j = 0; j < bullets.length; j++) {
            if (zombies[i].y == bullets[j].y && bullets[j].x > zombies[i].x) {
                bullets[j].destroy(j);
                zombies[i].getShot();
                zombies[i].checkStatus(i);
            }
        }
    }
}

//SunFlowers function
function generateSun() {
    let number = Math.floor(Math.random() * sunFlowers.length + 0)
    sunFlowers[number].generateSun();
}

function collectSun() {
    balance += money.length * 25;
    money.splice(0, money.length);
}

//Let Zombies attack
function zombieAttack(){
    for (let i = 0; i < zombies.length; i++) {
        zombies[i].detectObject();
    }
}

canvas.addEventListener('click', function (e){
    console.log('clicked' + e.offsetX + '/' + e.offsetY)
})