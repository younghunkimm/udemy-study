const btn = document.querySelector('#v2');
console.dir(btn);

btn.onclick = () => {
  console.log('YOU CLICKED ME!');
  console.log('I HOPE IT WORKED!!');
}

function scream() {
  console.log('AAAAHHHHHH');
  console.log('STOP TOUCHING ME!');
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = () => {
  alert('you clicked the h1');
}

console.log('---------------');

// addEventListener
const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', scream);
btn3.addEventListener('click', function() {
  alert("CLICKED");
})

// 쓰는 이유
function twist() {
  console.log('TWIST!');
}

function shout() {
  console.log('SHOUT!');
}

const tasButton = document.querySelector('#tas');

// 다른 함수가 덮임
// tasButton.onclick = twist;
// tasButton.onclick = shout;

// 이렇게하면 안덮임
tasButton.addEventListener('click', twist, { once: true });
tasButton.addEventListener('click', shout);