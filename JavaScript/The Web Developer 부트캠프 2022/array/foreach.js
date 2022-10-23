const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

numbers.forEach((el) => console.log(el));

console.log('---------');

for (let el of numbers) {
  if (el % 2 === 0) {
    console.log(el);
  }
}

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

movies.forEach((movie) => {
  console.log(`${movie.title} - ${movie.score}/100`);
});