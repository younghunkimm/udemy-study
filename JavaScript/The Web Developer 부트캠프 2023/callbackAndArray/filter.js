/**
 * 필터링 된 배열은 원본배열에 영향을 주지 않는다
 */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const filteredNumbers = numbers.filter(n => {
    return n < 10;
});

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

const goodMovies = movies.filter(m => m.score > 80); // 점수가 80 보다 높은 영화를 필터하여 goodMovies 에 배열로 저장
const goodTitles = goodMovies.map(m => m.title); // goodMovies 에 매핑하여 title 값만 배열로 저장
// filter 와 map 을 한번에
movies
.filter(m => m.score > 80)
.map(m => m.title);

const badMovies = movies.filter(m => m.score < 70);
const recentMovies = movies.filter(m => m.year > 2000);