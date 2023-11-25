/**
 * async
 * 
 * async 를 사용하여 비동기 함수로 선언
 * Promise 가 값으로 반환된다.
 */

async function hello() {}
console.log(hello()); // 자동으로 Promise 가 출력된다.

const sing = async () => {
    throw "OH NO, PROBLEM"; // reject
    return "LA LA LA LA"; // resolve
}
console.log(sing()) // 화살표 함수도 가능

sing()
.then(data => {
    console.log("PROMISE RESOLVED WITH: ", data);
})
.catch(err => {
    console.log("OH NO, PROMISE REJECTED!");
    console.log(err);
});



/**
 * 어딘가 있는 서버에 접속해야하기 때문에 로그인을 수행할 땐 시간이 걸리는 작업이다. (즉각적인 반응이 아님)
 */
const login = async (username, password) => {
    if (!username || !password) throw "Missing Credentials";
    if (password === 'corgifeetarecute') return "WELCOME!";
    throw "Invalid Password";
}

login('dafdsf', 'corgifeetarecute')
    .then(msg => {
        console.log("LOGGED IN!", msg);
    })
    .catch(err => {
        console.log("ERROR!", err);
    });