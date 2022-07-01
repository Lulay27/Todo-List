import { addTodo } from '../model/editTodo.js';
import Todo from './todo.js';

// adding a todo
submitBtn.addEventListener('click', (e)=> {
    const titleVal = getElement("#todo-input");
    titleVal.value =""; // might add this elsewhere kinda more view
    const newTodo = new Todo(titleVal.value);
    addTodo(newTodo);
});