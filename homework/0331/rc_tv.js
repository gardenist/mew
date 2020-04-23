let tv = {
    turnOn() {
        console.log('TV 켜짐');
    }
}



let rc = {
    turnOn() {
        tv.turnOn(); 
    }
}

