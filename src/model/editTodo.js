// might have this const elsewhere

const todoArr = JSON.parse(localStorage.getItem('todoArray'));

// add todo to array
function addTodo(todo) {
    todoArr.push(todo);
}

// remove todo from array with splice
function deleteTodo(index) {
    todoArr.splice(index,1);
}

// function 

export {todoArr,addTodo,deleteTodo}