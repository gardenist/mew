const webUtil = require('./web-util');
const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');
const userdb = require('./userdb')
const sessionStore = {};

http.createServer((req,res) => {
    const cookies = webUtil.parseCookies(req.headers.cookie);
    if (req.url.startsWith('/login')) {
        const { query } = url.parse(req.url);
        const { id, password } = qs.parse(query);
        let user = userdb.login(id,password);
        if(user) {
            const expires = new Date();
        expires.setMinutes(expires.getMinutes() +30);
        const sessionId = Date.now();
        sessionStore[sessionId] = {
            user,
            expires,
        };
        res.writeHead(302, {
            Location:'/',
            'Set-Cookie' : `sessionId=${sessionId}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
        });
        res.end();
        } else {
            fs.readFile('./login_fail.html', (err,data) => {
                if (err) {
                    throw err;
                }
                res.end(data);
            })
        }
    } else if(cookies.sessionId && sessionStore[cookies.sessionId] && sessionStore[cookies.sessionId].expires > new Date()) {
        let user = sessionStore[cookies.sessionId];
        res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});  
        res.end(`${user.user.name}님 안녕하세요`);
    } else {
        fs.readFile('./login.html', (err,data) => {
            if (err) {
                throw err;
            }
            res.end(data);
        });
    }
})
    .listen(8085,() => {
        console.log('8085번 포트에서 서버 대기중입니다');
    })