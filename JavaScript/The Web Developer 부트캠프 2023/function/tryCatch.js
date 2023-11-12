/**
 * 코드를 문제없이 실행시키고
 * 오류를 처리할 수 있게 된다.
 */
try {
    hello.toUpperCase();
} catch {
    console.log('ERROR !!!');
}
console.log('AFTER');



// 메세지가 문자열이 아닌 상황을 처리하기 위한 전략 중 하나
function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (error) {
        console.log(error);
        console.log('Please pass a string next time!');
    }
}