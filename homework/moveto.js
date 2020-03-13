
var array = ["하나","둘","셋","넷","다섯","여섯","일곱","여덟"];

    function msmoveTo() {
        //x,y값 받아오기
        var x = document.getElementById("xNumber").value;
        var y = document.getElementById("yNumber").value;

        // array에서 x에 위치한 요소를 y위치로 이동시키기
        // x가 y보다 앞에 위치하는 지 판별하기
        var index = y-x;
        if (index > 0) { // x가 y보다 앞에 있을 때 
            // array[x]에 위치한 요소를 잠시 다른 변수에 담아둠 
            let xTray = array[x];
            // array[x]를 제거함
            array.splice(x,1);
            // y위치에 x를 넣음
            array.splice(y,0,xTray);
            document.getElementById("resultArray").innerHTML = array;
        } /* else if (index < 0) {
            // x가 y보다 뒤에 있을 때 
            // array[x]에 위치한 요소를 잠시 다른 변수에 담아둠 
            let xTray = array[x];
            array.splice(x,1);
            array.splice(y,0,xTray);
            return array;
            
        }  */ 
        else {
            // x가 y랑 같을 때
            alert("x랑 y값이 같으면 안됩니다");
        }
        
    }