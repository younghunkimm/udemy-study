/**
 * Promise
 * 
 * [1] Promise 의 3가지 상태
 * 
 *      • Pending: 실행 전
 *      • Resolve: 실행 후 성공 (fulfilled)
 *      • Reject: 실행 후 실패 (rejected)
 * 
 * [2] Promise는 JS 이벤트 루프에서 `Microtask Queue` 에서 비동기적으로 동작한다.
 * 
 * [3] 후속 처리 메서드
 * 
 *      • Promise.prototype.then
 *          1) `then` 함수는 첫번째 인자(`fulfilled function`), 두번째 인자(`rejected function`)를 넣어서 해당 함수를 동작시킨다.
 * 
 *      • Promise.prototype.catch
 *          1) `catch` 메서드는 하나의 콜백함수를 인자로 받는다.
 *          2) `catch` 메서드 이후에도 메서드 체이닝이 가능하다. (`then` 과 동일)
 *          3) `Promise` 에서 발생하는 모든 에러 처리를 담당한다.
 * 
 *      • Promise.prototype.finally
 *          1) `catch` 메서드는 하나의 콜백함수를 인자로 받는다.
 *          2) `finally` 는 `Promise` 가 `settled` 된 상태에서 무조건 한 번 실행된다.
 *          3) 콜백함수의 리턴값이 적용 X
 * 
 * [4] Promise 메서드 체이닝 구현
 * 
 *      • 후속 처리 메서드인 `then`, `catch`, `finally` 의 `리턴값` 을 `Promise 객체` 로 구현
 * 
 * [5] Promise 정적 메서드
 * 
 *      • `Promise.race()`, `Promise.all()` 함수 등...
 */
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;

        setTimeout(() => {
            if (delay > 4000) {
                reject("Connection Timeout :(");
            } else {
                resolve(`Here is your fake data from ${url}`);
            }
        }, delay)
    })
}

fakeRequestPromise('yelp.com/api/coffee/page1')
    .then(() => {
        console.log("IT WORKED!!!!! (page1)");
        fakeRequestPromise('yelp.com/api/coffee/page2')
        .then(() => {
            console.log("IT WORKED!!!!! (page2)");
            fakeRequestPromise('yelp.com/api/coffee/page3')
                .then(() => {
                    console.log("IT WORKED!!!!! (page3)");
                }).catch(() => {
                    console.log("OH NO, ERROR!!! (page3)");        
                })
        }).catch(() => {
            console.log("OH NO, ERROR!!! (page2)");
        });
    }).catch(() => {
        console.log("OH NO, ERROR!!! (page1)");
    });