// 유저 테이블에서 유저 정보를 조회하는 역할 (userId, password, name, nickname) 
const users = {
    "ms" : {
        id : "ms",
        password : "12341234",
        name : "문선",
        nickname : "cute"
    }
}

function login(id,password) {
    let user = users[id]
    if(user) {
        if(user.password === password) {
            return user;
        }
    }
}

exports.login = login;
