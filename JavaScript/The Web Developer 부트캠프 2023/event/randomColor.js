const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', function() {
    const {rgb, r, g, b} = makeRandColor();
    document.body.style.backgroundColor = rgb;
    h1.innerText = rgb;
    if ((r + g + b) < 300) {
        h1.style.color = '#fff';
    } else {
        h1.style.color = '#000';
    }
});

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return {
        rgb: `rgb(${r}, ${g}, ${b})`,
        r: r, g: g, b: b
    }
}