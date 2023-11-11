// setTimeout
console.log('HELLO!!!...');

setTimeout(() => {
  console.log('...are you still there?');
}, 3000);

console.log('GOODBYE!!');

// setInterval
const id = setInterval(() => console.log(Math.random()), 2000);

// clearInterval
setTimeout(() => {
  clearInterval(id);
}, 5000);