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

// const firstName = user.firstName;
// const lastName = user.lastName;

// console.log(firstName, lastName);

const { email, firstName, lastName, city, bio } = user;
console.log(email, firstName, lastName, city, bio);

/**
 * died: deathYear = 'N/A'
 * 
 * 변수의 새 이름을 만들 수 있고
 * 특성 값이 없을 때는 디폴트 값을 정할 수 있다.
 */
const { born: birthYear, died: deathYear = 'N/A' } = user;
console.log(birthYear, deathYear);



const user2 = {
    email: 'Stacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,
    city: 'Tulsa',
    state: 'Oklahoma'
}

const { state, died = 'N/A' } = user2;