const user = {
    email: 'harvey@gmail.com',
    password: 'sCoTt1948sMiTh',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politician and the first openly',
    city: 'San Francisco',
    state: 'California'
}

function fullName(user) {
    return `${user.firstName} ${user.lastName}`;
}

console.log(fullName(user));

function fullName2(user) {
    const { firstName, lastName } = user;
    return `${firstName} ${lastName}`;
}

console.log(fullName2(user));

// 구조 분해
function fullName3({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
}

console.log(fullName3(user));




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

// movies.filter(movie => movie.score >= 90);
const famousMovie = movies.filter(({ score }) => score >= 90);
console.log(famousMovie);

// const ratedMovie = movies.map(movie => {
//     return `${movie.title} (${movie.year}) is rated ${movie.score}`;
// });
const ratedMovie = movies.map(({ title, score, year }) => {
    return `${title} (${year}) is rated ${score}`;
})
console.log(ratedMovie);