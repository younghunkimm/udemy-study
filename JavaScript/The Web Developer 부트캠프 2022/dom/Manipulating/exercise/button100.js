// WRITE YOUR CODE IN HERE:
const container = document.querySelector('#container');

for (let i = 0; i < 100; i++) {
  const button = document.createElement('button');
  button.innerText = 'Hey!';
  container.appendChild(button);
}