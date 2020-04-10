const parseCookies = (cookie='') => 
    cookie 
        .split(';')
        .map(v => v.split('='))
        .map(([k, ...vs]) => [k, vs.join('=')])
        .reduce((acc,[k,v]) => {
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        },{});

function parseCookies2(cookie) {
    if(!cookie) {
        cookie = '';
    }
    // theme=eoal; sessionToken=abc123; a=b; c=d
    cookie = cookie.split(';'); // ["theme=eoal"," sessionToken=abc123"," a=b"," c=d"]
    cookie = cookie.map(function(x) {
        return x.split('=')
    }) // [["theme","eoal"],["sessionToken","abc123"],["a","b"],["c","d"]]
    
    cookie 
        .split(';')
        .map(v => v.split('='))
        .map(([k, ...vs]) => [k, vs.join('=')])
        .reduce((acc,[k,v]) => {
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        },{});
}



// 쿠키가 있을 때에 쿠키를 선언하고 또 쿠키를 만드나? (개인적인 의문)