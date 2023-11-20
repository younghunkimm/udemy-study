/** 
 * Push
 * 
 * 배열 마지막 요소 뒤에 추가한다.
 */
let movieLine = ['tom', 'nancy'];
movieLine[2] = 'pablo';
console.log('movieLine', movieLine);
console.log(movieLine.push('oliver')); // 배열의 length 를 반환하고 배열을 update
console.log('movieLine', movieLine);
console.log(movieLine.push('harry', 'hermione'));
console.log('movieLine', movieLine);


/**
 * Pop
 * 
 * 배열 마지막 요소를 반환하고 배열에서 삭제한다.
 */
movieLine.pop();
console.log('movieLine', movieLine); // 배열의 마지막 요소를 반환하고 배열에서 삭제

let barbell = [];
barbell.push(45);
barbell.push(45);
barbell.push(25);
barbell.push(10);
barbell.push(2.5);
console.log('barbell', barbell);
console.log(barbell.pop());
console.log(barbell.pop());
console.log(barbell.pop());
console.log(barbell.pop());
console.log(barbell.pop());
console.log('barbell', barbell);