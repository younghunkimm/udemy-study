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

const user2 = {
  email: 'Stacy@gmail.com',
  firstName: 'Stacy',
  lastName: 'Gonzalez',
  born: 1987,
  city: 'Tulsa',
  state: 'Oklahoma',
}

{
  const firstName = user.firstName;
  const lastName = user.lastName;
  const email = user.email;

  console.log(firstName);
  console.log(lastName);
  console.log(email);
}

console.log('-------------');

{
  const { email, firstName, lastName, city } = user;
  console.log(email);
  console.log(firstName);
  console.log(lastName);
  console.log(city);
  
  const { born: birthYear, died: deathYear } = user;
  console.log(birthYear);
  console.log(deathYear);
}

console.log('-------------');

{
  const { city, state, died = 'N/A' } = user2;
  console.log(died);
}