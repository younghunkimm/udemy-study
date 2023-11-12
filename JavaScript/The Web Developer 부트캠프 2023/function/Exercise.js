/**
 * Exercise 36: 랜트 연습
 * 
 * 대문자 버전의 메세지 3번 출력하는 함수
 */
function rant(message) {
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
}



/**
 * Exercise 40: 마지막 요소 연습
 * 
 * 배열의 마지막 요소를 반환하는 함수
 */
function lastElement(arr) {
    if (arr.length === 0) {
        return null;
    } else {
        return arr[arr.length - 1];
        // return arr.slice(-1)[0]
        // return arr.at(-1); ==> 사용 시 주의 필요
    }
}



/**
 * Exercise 41: 대문자 변환 연습
 * 
 * 문자열 인수를 받아 첫 글자가 대문자로 된(문자열의 나머지 글자는 변경되지 않은) 새 문자열을 반환하는 함수
 */
function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1); // == word.substring(1);
    // return `${word[0].toUpperCase()}${word.slice(1)}`; ==> 템플릿 리터럴
}



/**
 * Exercise 42: 배열 합계 연습
 * 
 * 숫자 배열을 단일 인수로 받아 배열에 숫자 합을 반환하는 함수
 */
function sumArray(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    return total;
}

// for of 문으로 사용
function sumArray(arr) {
    let total = 0;
    for (let number of arr) {
        total += number;
    }

    return total;
}



/**
 * Exercise 43: 요일 연습
 * 
 * 이 함수는 한 개의 매개변수(1~7 사이의 숫자)를 받아 요일을 반환합니다(1은 월요일, 2는 화요일 등).
 * 숫자가 1보다 작거나 7보다 크면 함수는 null을 반환해야 합니다.
 * 일부 국가에서는 일요일을 한 주의 첫째 날로 취급하지만, 이 연습에서는 월요일을 첫째 날로 사용하겠습니다.
 */
let week =['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function returnDay(day) {
    if (0 >= day || 7 < day) {
        return null;
    } else {
        return week[day - 1];
    }
}



/**
 * Exercise 44: 함수 표현식 연습
 * 
 * 숫자의 제곱을 반환하는 함수
 */
const square = number => {
    return number * number;
}



/**
 * Exercise 45: 메서드 연습 달걀 낳기 연습
 * 
 * 1. area 는 한 변의 길이를 받은 다음 해당 변의 길이를 제곱한 값을 반환
 * 2. perimeter 는 한 변의 길이를 받아 4를 곱한 값을 반환
 */
const square2 = {
    area(width) {
        return width * width;
    },
    perimeter(width) {
        return width * 4;
    }
}



/**
 * Exercise 46: 달걀 낳기 연습
 * 
 * hen 이라는 이름의 오브젝트를 정의 후 세가지 속성을 갖는다.
 * name 은 'Helen'
 * eggCount 는 0
 * layAnEgg 는 eggCount 의 값을 1씩 증가시키고 문자열 'EGG'를 반환
 * this 를 사용
 */
const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
        this.eggCount++;
        return 'EGG';
    }
}
console.log(hen.name); // "Helen"
console.log(hen.eggCount); // 0
console.log(hen.layAnEgg()); // "EGG"
console.log(hen.layAnEgg()); // "EGG"
console.log(hen.eggCount); // 2