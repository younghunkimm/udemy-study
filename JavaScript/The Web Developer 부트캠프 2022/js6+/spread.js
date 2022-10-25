console.log(Math.max(13, 4, 5, 21, 3, 3, 1 ,2 ,53456));
console.log(Math.min(2, 5, 1));

const nums = [13, 4, 5, 21, 3, 3, 1 ,2 ,53456]
console.log(nums);
console.log(...nums);
console.log(Math.max(nums));
console.log(Math.max(...nums));
console.log(Math.min(...nums));

console.log('------------');

console.log('hello');
console.log(...'hello');
console.log('h', 'e', 'l');

console.log('------------');

const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const allPets = [1, 2, 3, ...cats, ...dogs, 'Speedy'];
console.log(allPets);

console.log('------------');

console.log(['hello']);
console.log([...'hello']);

console.log('------------');

const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae' };

const catDog = {...feline, ...canine}
console.log(catDog);

const dogCat = {...canine, ...feline, family: 'Steele'}
console.log(dogCat);

console.log('------------');

console.log({...[2, 4, 6, 8]});
console.log({...'HIII'});

console.log('------------');

const dataFromForm = {
  email: 'blueman@gmail.com',
  password: 'tobias123!',
  username: 'tfunke'
}