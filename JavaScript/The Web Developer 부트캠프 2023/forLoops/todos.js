let input = prompt('what would you like to do?');

const todos = ['Collect Chicken Eggs', 'Clean Litter Box'];

while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('**************');

        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }

        console.log('**************');
    } else if (input === 'new') {
        const newTodo = prompt('OK, what is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`);
    } else if (input === 'delete') {
        const index = parseInt(prompt('OK, enter an index to delete!'));

        if (!Number.isNaN(index)) {
            if (todos[index] !== undefined) {
                const deleted = todos.splice(index, 1);
                console.log(`OK, deleted ${deleted[0]}`);
            } else {
                console.log(`Well, there's no value in the index`);
            }
        } else {
            console.log('Unknown index');
        }
    }
    input = prompt('what would you like to do?');
}

console.log('OK QUIT THE APP!');