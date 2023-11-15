/**
 * some 과 every 는 boolean method 이며, true 와 false 를 반환한다.
 * 테스트를 할때 쓴다.
 */
const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77];

// 모든 요소가 75보다 크다면 true 를 반환
exams.every(score => score >= 80); // false

// 하나 이상만 봄
exams.some(score => score >= 90); // true



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
    }
];

movies.some(movie => movie.year > 2015); // true