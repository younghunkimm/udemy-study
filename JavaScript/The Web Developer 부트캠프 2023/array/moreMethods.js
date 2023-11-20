/**
 * concat
 * 
 * 배열을 합친다. 원본 배열은 수정되지 않음
 */
let cats = ['blue', 'kitty'];
let dogs = ['rusty', 'wyatt'];

console.log('cats & dogs', cats.concat(dogs));
console.log('dogs & cats', dogs.concat(cats));



/**
 * includes
 * 
 * 배열에 특정 값이 포함되어 있는지
 */
console.log(cats.includes('blue')); // true
console.log(cats.includes('Blue')); // false



/**
 * indexOf
 * 
 * 배열에 특정 값이 몇번째에 있는지
 * 없다면 '-1'을 반환
 */
console.log("Blue".indexOf('B')); // 0
console.log("Blue".indexOf('e')); // 3
console.log("Blue".indexOf('0')); // -1

let comboParty = dogs.concat(cats);
console.log(comboParty.indexOf('rusty')); // 0
console.log(comboParty.indexOf('kitty')); // 3
console.log(comboParty.indexOf('ASDSD!@#')); // -1



/**
 * reverse
 * 
 * 배열을 반전하고 원본 배열이 수정된다 (파괴 메서드)
 */
console.log(comboParty);
console.log(comboParty.reverse());
console.log(comboParty);



/**
 * slice(start, end)
 * 
 * start ~ end 범위의 요소를 삭제한다.
 */
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
console.log(colors.slice());
console.log(colors.slice(3)); // ['green', 'blue', 'indigo', 'violet']: 3 ~
console.log(colors.slice(2, 4)); // ['yellow', 'green']: 2 ~ 3
console.log(colors.slice(0, 3)); // ['red', 'orange', 'yellow']: 0 ~ 2
console.log(colors.slice(-2)); // ['indigo', 'violet']: -2 ~ ❗️뒤에서 부터



/**
 * splice(start, delete, string)
 * 
 * 삭제된 배열이 반환되고, 원본 배열이 수정된다. (파괴 메서드)
 * 배열 중간에 값을 삽입할 때 사용하는건 드물다❗️
 * 
 * @param {number} start: 삽입할 인덱스 번호
 * @param {number} delete: 삽입할 인덱스 번호에서 몇개 삭제할지
 * @param {string} string: 삽입할 내용 (선택)
 */
colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
console.log(colors.splice(5, 1));
console.log(colors);
console.log(colors.splice(1, 0, 'red-orange'));
console.log(colors);
console.log(colors.splice(4, 0, 'yellow-green', 'forest-green'));
console.log(colors);

colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
console.log(colors);
console.log(colors.splice(2, 2, 'DELETED!!'));
console.log(colors);

let days = ['Monday', 'Tuesday', 'Wednesday'];
console.log(days.splice(1, 2));
console.log(days);



/**
 * sort
 * 
 * 배열 정렬
 */
let scores = [1, 70, 100, 2500, 9, -12, 0, 34];
console.log(scores.sort()); // 첫번째 자리로 비교해 정렬되어 이상함
console.log(scores.sort((a, b) => a - b)); // 오름차순
console.log(scores.sort((a, b) => b - a)); // 내림차순