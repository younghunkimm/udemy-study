const input = document.querySelector('input');

input.addEventListener('keydown', function(e) {
    console.log(e.key);
    console.log(e.code);
    console.log(e.shiftKey);
});



/** 입력창 안이 아니라 페이지의 어느 곳에서든 키보드 입력을 감지하고 싶을 때 */
window.addEventListener('keydown', function(e) {
    // console.log(e.code);

    switch (e.code) {
        case 'ArrowUp':
            console.log('UP!');
        break;

        case 'ArrowDown':
            console.log('DOWN!');
        break;

        case 'ArrowLeft':
            console.log('LEFT!');
        break;

        case 'ArrowRight':
            console.log('RIGHT!');
        break;

        default:
            console.log('IGNORED!');
        break;
    }
});