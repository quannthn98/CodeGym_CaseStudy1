class Remote {
    battery;
    tv;
    connectedTv;

    constructor(battery) {
        this.battery = battery;
    }

    getConnectedTv() {
        return this.connectedTv;
    }

    connectNewTV(tv) {
        this.tv = tv
        this.connectedTv = this.tv.name;
    }

    buttonTurnOnOff() {
        this.tv.turnOnOff();
    }

    buttonSwitchChannel(id) {
        this.tv.switchChannel(id)
    }

    buttonIncreaseVol() {
        this.tv.increaseVol();
    }

    buttonDecreaseVol() {
        this.tv.decreaseVol();
    }
}