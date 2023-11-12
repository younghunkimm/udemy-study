const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

numbers.forEach(function(el) {
    if (el % 2 === 0) {
        console.log(el);
    }
});

for (el of numbers) {
    if (el % 2 === 0) {
        console.log(el);
    }
}



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
];

movies.forEach(function(movie) {
    console.log(`${movie.title} - ${movie.score}/100`);
});

for (movie of movies) {
    console.log(`${movie.title} - ${movie.score}/100`);
}