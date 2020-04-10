// 전자레인지
let microwave = {
    status: [],
    in(foodin) {
        this.status.push(foodin);
        console.log(foodin+"가 전자레인지 안에서 데워집니다.");
    },
    out(foodout) {
        this.status.splice(this.status.indexOf(foodout),1);
        console.log(foodout+"을 전자레인지 밖으로 꺼냈습니다");
    },
    toString() {
        return "status:" + JSON.stringify(this.status) + '\n' + this.in.toString() + '\n' + this.out.toString()
    }
}

// 스탠드조명
let stand = {
    status: "off",
    batteryStatus: 100,
    needcharge() {
        if(this.batteryStatus === 0) {
            this.batteryStatus = 100;
            console.log('배터리가 방전되었으므로, 자동으로 충전하였습니다');
        } },
    on() {
        this.status = "on";
        this.batteryStatus = this.batteryStatus - 10;
        this.needcharge();
    },
    off() {
        this.status = "off"
        this.batteryStatus = this.batteryStatus - 10;
        this.needcharge();
    }

}

// 리모컨 
let remoteController = {
    chStatus: "MBC",
    volumeSize : 0,
    changeCh(newCh) {
        let beforeCh = this.chStatus;
        this.chStatus = newCh;
        console.log("채널이 "+beforeCh+"에서"+newCh+"으로 변경되었습니다");
    },
    changeVL(size) {
        if(size < 0) {
            throw new Error("볼륨은 0보다 크게 입력해주세요");
        }
        this.volumeSize = size;

    }
}

// 게임 캐릭터 

// 직장인 

// 영화 


let mappings = {
    microwave: microwave,
}; 

let btnEvent = document.getElementsByClassName('category'); 
for (let i=0; i < btnEvent.length; i++) {
    btnEvent[i].onclick = function(e) {
       let id = e.target.id;
       let result = document.getElementById('output');
       result.innerText = mappings[id]
    }  
};

