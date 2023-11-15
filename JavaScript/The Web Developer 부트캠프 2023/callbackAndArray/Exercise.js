/**
 * Exercise 48: 화살표 함수 연습
 * 
 * 인사말 반환하는 greet 함수를 화살표 함수로
 */
const greet = name => `Hey ${name}!`;




/**
 * Exercise 49: 필터 연습
 * 
 * 10자 미만의 사용자 이름만 포함하는 새 배열을 반환하는 함수
 */
const validUserNames = usernames => usernames.filter(n => n.length < 10);




/**
 * Exercise 50: Some/Every 연습
 * 
 * 배열에 포함된 숫자가 모두 짝수인 경우 true를 반환. 그렇지 않으면 false를 반환
 */
const allEvens = nums => nums.every(num => num % 2 === 0);