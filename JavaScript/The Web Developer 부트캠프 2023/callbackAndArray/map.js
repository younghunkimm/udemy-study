const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

/**
 * map
 * 
 * 반환 값을 새로운 배열에 담는다.
 */
const doubles = numbers.map(function(num) {
    return num * 2; // [2, 4, 6, ...]
});



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

const titles = movies.map(function(movie) {
    return movie.title.toUpperCase(); // ['AMADEUS', 'STAND BY ME', ...]
});