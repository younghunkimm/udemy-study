const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const imgExt = '.png'

const container = document.querySelector('#container');

for (let i = 1; i <= 151; i++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');

    const label = document.createElement('span');
    label.innerText = `#${i}`;

    const newImg = document.createElement('img');
    const newImgSrc = baseUrl + i + imgExt;
    newImg.src = newImgSrc;

    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    container.appendChild(pokemon);
}