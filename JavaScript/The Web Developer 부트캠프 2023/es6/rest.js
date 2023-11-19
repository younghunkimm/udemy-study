/**
 * arguments (인수 객체) 에는 넘어온 인수들이 전부 들어있다.
 * 배열과 비슷하지만 배열이 아니기 때문에 배열 메소드를 쓸 수 없다.
 * 
 * rest 매개변수를 사용하면 배열로 값을 가져온다. 👍
 */
function sum(...nums) {
    console.log(arguments);
    console.log(nums);
    return nums.reduce((prev, curr) => prev + curr);
}

sum(34, 65, 77, 23, 123, 30); // 합계를 return


function raceResults(gold, silver, ...everyoneElse) {
    console.log(`GOLD MEDAL GOES TO: ${gold}`);
    console.log(`SILVER MEDAL GOES TO: ${silver}`);

    // ${}: string interpolation (문자열 보간법)
    // 보간안에 배열이 올 경우 문자열로 표현하기 위해 Array.prototype.toString() 이 자동 호출됨.
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`);
}

raceResults('Tammy', 'Todd', 'Tina', 'Trevor', 'Travis');