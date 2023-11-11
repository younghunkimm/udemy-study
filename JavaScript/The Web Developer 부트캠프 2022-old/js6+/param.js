const user = {
  email: 'hunifive@gmail.com',
  password: 'hun1f1v3Ma!l',
  firstName: 'Kim',
  lastName: 'Young-hun',
  born: '1997',
  died: '2097',
  city: 'San Francisco',
  state: 'California',
}

function fullName(user) {
  return `${user.firstName} ${user.lastName}`;
}
console.log(fullName(user));

// 위에가 더 짧긴하지만 매개변수를 자주 쓸 땐 이게 더 낫다.
function fullName2(user) {
  const { firstName, lastName } = user;
  return `${firstName} ${lastName}`;
}
console.log(fullName2(user));

// 사용자 정보를 사용할 계획이 없는 경우에
// born, died, bio 등 다른 정보는 출력하지 않고
// 이름 정보만 필요하다면
// 매개변수에서 구조 분해를 할 수 있다.
function fullName3({ firstName, lastName = 'asdad' }) {
  return `${firstName} ${lastName}`;
}
console.log(fullName3(user));

console.log('------------');

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

let scoreFilter;
let scoreMap;

console.log('------- filter --------');
scoreFilter = movies.filter((movie) => movie.score >= 90);
console.log(scoreFilter);

scoreFilter = movies.filter(({ score }) => score >= 90);
console.log(scoreFilter);

console.log('--------- map ---------');
scoreMap = movies.map(movie => {
  return `${movie.title} (${movie.year}) is rated ${movie.score}`;
})
console.log(scoreMap);

scoreMap = movies.map(({ title, score, year }) => {
  return `${title} (${year}) is rated ${score}`;
})
console.log(scoreMap);