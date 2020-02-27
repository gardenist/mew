const http = require('http');

http.createServer((req, res) => {
    if(/\/post\/\d+/.test(req.url)) {
        res.write('<h1>Hello Node!</h1>');
        res.end('<p>Hello Server!</p>');
    }
    else if (/\/login/.test(req.url)) {
        res.write('<h1>login</h1>')
        res.end('<script>alert("로그인이 필요한 화면입니다")</script>');
    }
    else {
        res.write('<h1>404</h1>')
        res.end('<p>페이지를 찾을 수 없습니다</p>');
    };

}).listen(8080,() => {
    console.log('8080번 포트에서 서버 대기 중입니다!');
});