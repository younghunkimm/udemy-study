// 속성
const firstLink = document.querySelector('a');
console.log(firstLink.href);
console.log(firstLink.getAttribute('href'));
console.log(firstLink.getAttribute('class'));
console.log(firstLink.getAttribute('id'));
console.log(firstLink.getAttribute('title'));

console.log(firstLink.setAttribute('href', 'http://www.google.com'));

const input = document.querySelector('input[type="text"]');
input.type = 'password';
input.type = 'color';
input.setAttribute('type', 'text');

console.log('------------');

// 스타일
const h1 = document.querySelector('h1');
console.log(h1.style);
h1.style.border = '2px solid pink';

console.log(h1.style.fontSize);
console.log(window.getComputedStyle(h1).color);
console.log(window.getComputedStyle(h1).fontSize);
console.log(window.getComputedStyle(h1).fontFamily);
console.log(window.getComputedStyle(h1).margin);

const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}

console.log('------------');

// ClassList
const h2 = document.querySelector('h2');

// Bad
// console.log(h2.getAttribute('class'));
// console.log(h2.setAttribute('class', 'purple'));
// console.log(h2.setAttribute('class', 'border'));

// let currentClasses = h2.getAttribute('class');
// console.log(currentClasses);
// h2.setAttribute('class', `${currentClasses} purple`);

// Good
console.log(h2.classList);

// 클래스 추가
h2.classList.add('purple');
h2.classList.add('border');

// 클래스 제거
h2.classList.remove('border');

// 클래스 포함여부
console.log(h2.classList.contains('border'));
console.log(h2.classList.contains('purple'));

// 클래스 토글
h2.classList.toggle('purple');
h2.classList.toggle('purple');

console.log('------------');

// 계층 이동

// 부모, 자식
const firstBold = document.querySelector('b');
console.log(firstBold);
console.log(firstBold.parentElement);
console.log(firstBold.parentElement.parentElement);
console.log(firstBold.parentElement.parentElement.parentElement);

const paragraph = firstBold.parentElement;
console.log(paragraph.children);
console.log(paragraph.children[0]);
console.log(paragraph.children[0].parentElement);

// siblings (해당하는 노드를 출력, 브라우저에서 자동으로 빈 노드를 만듬 text)
const squareImg = document.querySelector('.square');
console.log(squareImg.previousSibling);
console.log(squareImg.nextSibling);

// elementSiblings
console.log(squareImg.previousElementSibling);
console.log(squareImg.nextElementSibling);

console.log('------------');

// jQuery siblings() 구현
// <jQuery>
// $('.tocsection-2').siblings();

// <JavaSciprt>
const siblings = (el) => [...el.parentElement.children].filter(node => node != el);
const tocsection2 = document.querySelector('.tocsection-2');
console.log(siblings(tocsection2));

// 원리
// 1. 먼저 인자로 받은 엘리먼트의 부모엘리먼트(parentElement)를 구하고 자식(children)들을 배열로 반환한다.
// 2. 다만 이때의 배열은 진짜 배열이 아닌 유사배열이라 filter() 고차함수를 사용하기 위해선 진짜 배열로 변환해줘야 한다.
//    * Array.from()을 이용하거나 spread문법으로 변환
// 3. 그리고 filter 고차함수로 배열을 하나씩 순회하면서 인자로 받은 엘리먼트가 아닌 것들만 배열로 만들어 반환한다.
// 4. 즉, 형제 엘리먼트로 이루어진 배열을 반환하게 된다.

console.log('------------');

// appendChild
const newImg = document.createElement('img');
console.dir(newImg);
newImg.src = 'https://images.unsplash.com/photo-1666681086233-0ea2686179a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';
document.body.appendChild(newImg);
newImg.classList.add('square');

const newH3 = document.createElement('h3');
newH3.innerText = 'I am new!';
document.body.appendChild(newH3);

// append
const p = document.querySelector('p');
p.append('i am new text!!!!!!!', 'asdfsafdsaf');

// prepend
const newB = document.createElement('b');
newB.append('Hi!');
p.prepend(newB);

// ----------------------

// insertAdjacentElement(position, element)
// 인접한 형제를 삽입

// <position>
// 1. 'beforebegin': Before the targetElement itself. (element 앞)
// 2. 'afterbegin': Just inside the targetElement. (첫번째 자식 앞)
// 3. 'beforeend': Just inside the targetElement. (마지막 자식 뒤)
// 4. 'afterend': After ther targetElement itself. (element 뒤)

const newH2 = document.createElement('h2');
newH2.append('Are adorable chickens');
h1.insertAdjacentElement('afterend', newH2);

// ----------------------

// before & after
const h4 = document.createElement('h4');
h4.innerHTML = '<i>I am h4</i>';
h1.before(h4);

const h3 = document.createElement('h3');
h3.innerText = 'I am h3';
h1.after(h3);

// ----------------------

// removeChild (선택요소의 부모에서 선택요소을 찾아 제거)
const firstLi = document.querySelector('li');
const ul = firstLi.parentElement;
ul.removeChild(firstLi);

const b = document.querySelector('b');
b.parentElement.removeChild(b);

// remove (선택한 요소를 바로 제거)
const img = document.querySelector('img');
img.remove();