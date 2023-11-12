const texts = ['rofl', 'lol', 'omg', 'ttyl'];
const caps = texts.map((t) => t.toUpperCase());

console.log(texts);
console.log(caps);

console.log('---------');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const doubles = numbers.map((num) => num * 2);
console.log(doubles);

console.log('---------');

const movies = [
  {
    title: 'Amadeus',
    score: 99
  },
  {
    title: 'Stand By Me',
    score: 85
  },
  {
    title: 'Parasite',
    score: 95
  },
  {
    title: 'Alien',
    score: 90
  },
]

const titles = movies.map((movie) => movie.title);
console.log(titles);