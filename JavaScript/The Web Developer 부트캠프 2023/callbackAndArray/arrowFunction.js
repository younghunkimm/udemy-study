// arrow function 사용법
const add = (x, y) => {
    return x + y;
}

const square = num => {
    return num * num;
}

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1;
// }

/**
 * {} 가 아닌 () 로 감싸면 return 을 적지 않아도 자동적으로 반환
 */
const rollDie = () => (
    // let msg = '123'; -> X 괄호 안에는 딱 하나의 표현식만 존재해야 함
    Math.floor(Math.random() * 6) + 1
)

// 짧은 코드일 땐 괄호로 감싸지 않아도 됨
const add2 = (a, b) => a + b;


/**
 * Map, forEach 화살표 함수를 사용하며 복습
 */
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

// const newMovies = movies.map(function(movie) {
//     return `${movie.title} - ${movie.score / 10}`;
// });

const newMovies = movies.map(movie => `${movie.title} - ${movie.score / 10}`);