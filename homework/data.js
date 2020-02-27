// node.js의 fs 모듈로 읽고, 각 줄의 key와 value를 자바스크립트 객체로 변환함 1. 줄 단위로 나누고, 2. key와 value를 :으로 나눠주고, 3.객체의 속성으로 추가//

// 파일 읽기 
const fs = require('fs');
var contents;

fs.readFile('./data.txt', (err, data) => {
    if(err) {
        throw err;
    }
    contents = data.toString();
    var lines = contents.split('\n');
    var object = {};
    for(let i = 0; i < lines.length; i++) {
        let resource = lines[i].split(':');
        let key = resource[0]
        let value = resource[1]
      
        object[key] = value;
      }
    var json = JSON.stringify(object,null,1);
    fs.writeFile('./data.json',json,(err) => {
        if (err) {
            throw err;
        }
    });
});
