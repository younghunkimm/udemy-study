// window
console.log(window);

// html 아님
console.log(document);

// html을 보려면
// directory를 의미
// 문서 객체 구조를 출력
console.dir(document);



/* 계층 이동 */
const box = document.querySelector('div');

box.parentElement // 부모 요소
box.parentElement.parentElement // 부모 > 부모 요소
box.parentElement.parentElement.parentElement // 부모 > 부모 > 부모 요소

box.children // 자식 요소들

box.previousSibling // 이전 형제 노드
box.nextSibling // 다음 형제 노드
box.previousElementSibling // 이전 형제 요소
box.nextElementSibling // 다음 형제 요소

/* createElement & appendChild & append & prepend */
// 새로운 요소를 생성하여 body 자식들 중 제일 뒤에 추가한다.
const newText = document.createElement('span'); // 새로운 span 요소를 생성
newText.append('hello'); // append: 텍스트도 추가 가능
document.body.appendChild(newText); // appendChild: body 내부의 끝 부분에 추가
document.body.prepend(newText); // prepend: body 내부의 시작 부분에 추가

/**
 * 인접한 형제에 추가하려면? 🔥 insertAdjacentElement(position, element)
 * 
 * 
 * ❗️ beforebegin❗️
 * <ul>
 *   ❗️ afterbegin❗️
 *   <li></li>
 *   <li></li>
 *   <li></li>
 *   ❗️ beforeend❗️
 * </ul>
 * ❗️ afterend❗️
 * 
 * 
 * ⭐️ 구분법
 * <ul> : begin
 * </ul> : end
 * 로 구분하면 쉽다!!
 */ 

const h2_Beforebegin = document.createElement('h2');
const h2_Afterbegin = document.createElement('h2');
const h2_Beforeend = document.createElement('h2');
const h2_Afterend = document.createElement('h2');

h2_Beforebegin.append('beforebegin');
h2_Afterbegin.append('afterbegin');
h2_Beforeend.append('beforeend');
h2_Afterend.append('afterend');

const ul = document.querySelector('ul');

ul.insertAdjacentElement('beforebegin', h2_Beforebegin);
ul.insertAdjacentElement('afterbegin', h2_Afterbegin);
ul.insertAdjacentElement('beforeend', h2_Beforeend);
ul.insertAdjacentElement('afterend', h2_Afterend);




/**
 * removeChild & remove
 * 
 * removeChild: 제거하려는 요소의 부모에 메서드를 호출하는 방식 (old)
 * remove: 선택한 요소를 제거한다
 */
const firstLi = document.querySelector('li');
const parentUl = firstLi.parentElement;
parentUl.removeChild(firstLi); // 번거로움
firstLi.remove(); // 👍