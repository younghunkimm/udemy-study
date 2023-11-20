/**
 * Shift
 * 
 * 배열 첫 요소를 반환하고 배열에서 삭제한다.
 */
let movieLine = ['tom', 'nancy', 'pablo', 'oliver', 'eva'];

console.log('shift', movieLine.shift());
console.log('movieLine', movieLine);

let nextPatron = movieLine.shift();
console.log('nextPatron', nextPatron);
console.log('movieLine', movieLine);
console.log(movieLine.shift());
console.log(movieLine.shift());
console.log(movieLine.shift());
console.log(movieLine.shift());
console.log(movieLine.shift());



/**
 * Unshift
 * 
 * 배열 첫 요소 앞에 추가한다.
 */
movieLine = ['jerry', 'deniz', 'kevin', 'carly'];
console.log('unshift', movieLine.unshift('VIP')); // 배열의 length 를 반환하고 배열을 update
console.log('movieLine', movieLine);