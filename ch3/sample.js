class MyEventEmitter {
    constructor() {
        this.listeners = {}
    }

    on(name, callback) {
        // 이벤트를 저장
        let listeners = this.listeners[name];

        // undefined
        if(listeners === undefined) {
            listeners = [];
            this.listeners[name] = listeners;
        }

        listeners.push(callback);
    }

    emit(name) {
        // 저장된 이벤트를 찾아서 호출
        // this.listeners에서 name을 키로 가져옴 
        let index = this.listeners[name];
        // 없거나 -> 무시 
        if(index !== undefined) {
        // 있다면 배열을 for문으로 돌면서 콜백을 호출 
        for(var i=0; i < index.length; i++){
            let func = index[i]; 
            func(); 
        }
        }

    }
}