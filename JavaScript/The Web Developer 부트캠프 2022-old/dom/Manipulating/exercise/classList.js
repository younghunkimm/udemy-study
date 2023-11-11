// WRITE YOUR CODE IN HERE:
const lis = document.querySelectorAll('li');

{ // 1
  // for (let i = 0; i < lis.length; i++) {
  //   lis[i].classList.toggle('highlight');
  // }
}

{ // 2
  // lis.forEach(li => li.classList.toggle('highlight'));
}

{ // 3
  for (let li of lis) {
    li.classList.toggle('highlight');
  }
}