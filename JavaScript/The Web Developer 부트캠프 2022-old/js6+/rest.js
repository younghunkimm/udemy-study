// arguments
// 배열 메서드는 사용할 수 없다.
// 배열과 비슷하지만 배열이 아님 (유사 배열 객체)
// 화살표 함수에서 사용할 수 없다.
function sum() {
  console.log(arguments);

  // 작동 X
  // return arguments.reduce((total, el) => total + el);
}
sum(3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 1, 2, 3);

console.log('-------------');

function sumAll(...nums) {
  console.log(nums);
  
  return nums.reduce((total, el) => total + el);
}
console.log(sumAll(34, 51, 12));

console.log('-------------');

function raceResults(gold, silver, ...everyoneElse) {
  console.log(`GOLD MEDAL GOES TO: ${gold}`);
  console.log(`SILVER MEDAL GOES TO: ${silver}`);
  console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`);
}

raceResults('Tammy', 'Todd', 'Tina', 'Trevor', 'Travis');