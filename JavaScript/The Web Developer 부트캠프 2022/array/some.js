// every & some
const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77]

// every: 전체가 조건에 맞으면
let every = exams.every(score => score >= 75);
console.log(every);
every = exams.every(score => score >= 80);
console.log(every);

console.log('---------');

const movies = [
  {
    title: 'Amadeus',
    score: 99,
    year: 1984
  },
  {
    title: 'Sharknado',
    score: 35,
    year: 2013
  },
  {
    title: '13 Going On 30',
    score: 70,
    year: 2004
  },
  {
    title: 'Stand By Me',
    score: 85,
    year: 1986
  },
  {
    title: 'Waterworld',
    score: 62,
    year: 1995
  },
  {
    title: 'Jingle All The Way',
    score: 71,
    year: 1996
  },
  {
    title: 'Parasite',
    score: 95,
    year: 2019
  },
  {
    title: 'Notting Hill',
    score: 77,
    year: 1999
  },
  {
    title: 'Alien',
    score: 90,
    year: 1979
  },
]

// 하나라도 있으면
let some = movies.some(movie => movie.year > 2015);
console.log(some);
some = movies.some(movie => movie.year > 2020);
console.log(some);

console.log('---------');

// Some & Every Exercise
// Define a function called allEvens that accepts a single array of numbers.  If the array contains all even numbers, return true.  Otherwise, return false.  Use some or every to help you do this!  (only one of them is actually useful here)

function allEvens(nums) {
  return nums.every(num => num % 2 === 0);
};

console.log(allEvens([2,4,6,8])); // true
console.log(allEvens([1,4,6,8])); // false
console.log(allEvens([1,2,3])); // false