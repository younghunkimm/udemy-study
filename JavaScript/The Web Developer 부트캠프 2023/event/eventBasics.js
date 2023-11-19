function twist() {
    console.log('TWIST!');
}

function shout() {
    console.log('SHOUT!');
}

const tasButton = document.querySelector('#tas');

tasButton.addEventListener('click', twist, { once: true }); // 클릭했을 때 처음 한번만 실행
tasButton.addEventListener('click', shout);