// 함수 호출 시의 스프레드 구문
const nums = [52, 32, 102, 23, 1, 59, 20, 98];

console.log(nums);
console.log(...nums);

console.log(Math.max(nums)); // NaN
console.log(Math.max(...nums)); // 102

console.log('hello');
console.log(...'hello');



// 행렬 리터럴 스프레드 구문
const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const allPets = ['1', '2', '3', ...cats, ...dogs, 'Speedy'];
console.log(allPets);

console.log([...'hello']); // 문자도 가능



// 객체 스프레드 구문
const feline = {
    legs: 4,
    family: 'Felidae'
}
const canine = {
    isFurry: true,
    family: 'Caninae'
}

console.log({...feline, color: 'black'})
const catDog = {
    ...feline,
    ...canine,
    family: 'Steele'
}
console.log(catDog);


console.log({...[2, 4, 6, 8]})


const dataFromForm = {
    email: 'kyh@gmail.com',
    password: 'KYH123!',
    username: 'hun'
}

const newUser = {
    ...dataFromForm,
    id: 2345,
    isAdmin: false
}

console.log(newUser);