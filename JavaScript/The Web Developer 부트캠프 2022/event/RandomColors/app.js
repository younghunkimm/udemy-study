const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', function () {
    const newColor = makeRandColor();
    const [r, g, b] = newColor;

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    h1.innerText = `rgb(${r}, ${g}, ${b})`;
    if (r + g + b < 100) {
      h1.style.color = 'rgb(255, 255, 255)';
    } else {
      h1.style.color = 'rgb(0, 0, 0)';
    }
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}

