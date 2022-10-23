const delay = 1000;
const todos = ['Collect Chicken Eggs', 'Clean Litter Box']

setTimeout(() => {
  let input = prompt('what would you like to do?');
  while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
      listTodo();
    } else if (input === 'new') {
      addTodo();
    } else if (input === 'delete') {
      deleteTodo();
    }
    input = prompt('what would you like to do?');
  }
  console.log("OK QUIT THE APP");
}, delay);

function addTodo() {
  const newTodo = prompt('Ok, what is the new todo?');
  todos.push(newTodo);
  console.log(`${newTodo} added to the list`);
}

function listTodo() {
  console.log('*******************');
  for (let i = 0; i < todos.length; i++) {
    console.log(`${i}: ${todos[i]}`);
  }
  console.log('*******************');
}

function deleteTodo() {
  const index = parseInt(prompt('Ok, enter an index to delete:'));
  if (!Number.isNaN(index)) {
    const deleted = todos.splice(index, 1);
    console.log(`OK, deleted ${deleted[0]}`);
  } else {
    console.log('Unknown index');
  }
}