let command;
let todo = [];

while (command !== 'quit') {
    command = prompt('What would you like to do?');
    if (command === 'new') {
        let newTodo = prompt('Add a Todo');
        todo.push(newTodo);
    } else if (command === 'list') {
        console.log('**************');
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i}: ${todo[i]}`)
        }
        console.log('**************');

    } else if (command === 'delete') {
        let index = parseInt(prompt('What number you want to remove?'));
        if (index >= 0 && index < todo.length) {
            console.log(`Todo ${todo[index]} has been removed from the list`);
            todo.splice(index, 1);
        } else {
            console.log('Invalid Index');
        }
    }
}

console.log('you quit the app')