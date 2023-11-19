const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

/** reduce 미사용 */
let total = 0;
for (let price of prices) {
    total += price;
}

/** reduce 사용 */
const total2 = prices.reduce((total, price) => {
    console.log(total, price);
    return total + price;
});

/** 배열에서 최소값을 구하는 방법 */
const minPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    }
    return min;
})



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

const highestRated = movies.reduce((bestMovie, currMovie) => {
    if (currMovie.score > bestMovie.score) {
        return currMovie;
    }
    return bestMovie;
});


const evens = [2, 4, 6, 8];

/**
 * console.log
 * 
 * 1) sum: 2, num: 4
 * 2) sum: 6, num: 6
 * 3) sum: 12, num: 8
 * 4) return 20
 */
evens.reduce((sum, num) => sum + num); // 20

/** 
 * reduce의 초기값을 설정
 * 
 * console.log
 * 
 * 1) sum: 100, num: 2
 * 2) sum: 102, num: 4
 * 3) sum: 106, num: 6
 * 4) sum: 112, num: 8
 * 5) return 120
 */
evens.reduce((sum, num) => sum + num, 100); // 120