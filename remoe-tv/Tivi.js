class Tivi {
    status;
    name;
    volume;
    channelList;
    currentChannel;
    constructor(status, name) {
        this.name = name;
        this.status = status;
        this.volume = 50
        this.channelList = ['','vtv1','vtv2','vtv3']
    }

    turnOnOff() {
        this.status = !this.status;
        if (this.status == true) {
            this.currentChannel = this.channelList[1];
        } else {
            this.currentChannel = "TV is turning off"
        }
    }

    getCurrentChannel(){
        return this.currentChannel;
    }

    switchChannel(id){
        if (id<this.channelList.length) {
            this.currentChannel = this.channelList[id]
        } else {
            alert('currently this TV dont support this channel')
        }
    }

    increaseVol(){
        this.volume++;
    }

    decreaseVol(){
        this.volume--;
    }

}