// 한글이 아니라 영어, 공백, 숫자 등등 다른 문자일 경우 그대로 반환함 
// 한글이지만 낱자의 경우에는 그냥 반환함 

// 유효성 체크하고 나서 함수 실행함 
function check(word) {
    try {
    if (typeof word !== "string") throw "문자열을 입력해주세요"; // 문자열 아닌 타입, undefined, null이 전달되면 throw 로 에러 발생시킴 
    }
    catch(err) {
        console.log(err)
    }

function getOnset(word) {
// 자음 집단을 만들어줌 
let arr = ["ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"];
for (let k=0; k < word.length; k++) {
let index = word.codePointAt(k);
let answer = [];
let finalAnswer;
for(var i = 0; i < 20; i++) {
    let minRange = 44032 + (588*i);
    let maxRange = 44032 + (588*i) + 587;
    if(minRange <= index && index <= maxRange) {
        answer.push(arr[i])
    }
    else {
    }
}
finalAnswer = answer.join('');
console.log(answer);
}
}

getOnset(word);

}