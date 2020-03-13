// 문자열을 입력받음
// 문자열 아닌 타입, undefined, null이 전달되면 throw 로 에러 발생시킴 
// 한글이 아니라 영어, 공백, 숫자 등등 다른 문자일 경우 그대로 반환함 
// 한글이지만 낱자의 경우에는 그냥 반환함 

function getOnset(word) {
// 자음 집단을 만들어줌 
let arr = ["ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"];
// 멀쩡한 한글을 한글자 입력받았을 때, 해당 값이 어떤 숫자에 속해있는 지 판단함 
let index = word.codePointAt(0);
let answer;
for(var i = 0; i < 20; i++) {
    let minRange = 44032 + (588*i);
    let maxRange = 44032 + (588*i) + 587;
    if(minRange <= index && index <= maxRange) {
        answer = arr[i];
        console.log(answer);
        return; 
    }
    else {

    }
}

}