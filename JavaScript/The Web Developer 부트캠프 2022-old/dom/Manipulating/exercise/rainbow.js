const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
{ // 1
  // const spans = document.querySelectorAll('span');
  // for (let i = 0; i < spans.length; i++) {
  //     spans[i].style.color = colors[i];
  // }
}

{ // 2
  // const spans = document.querySelectorAll('span');
  // for (let i in colors) {
  //   spans[i].style.color = colors[i];
  // }
}

{ // 3
  const spans = document.querySelectorAll('span');
  spans.forEach((item, index) => {
    item.style.color = colors[index];
  })
}