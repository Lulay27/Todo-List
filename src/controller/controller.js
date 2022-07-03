import { displayTodoArray } from '../view/displayTodo.js';
import {submitBtn,todoInput} from '../view/domConstants.js';
import { createTodo } from '../view/domHelperFunctions.js';

// adding a todo
const EventListeners = () => {
    submitBtn.addEventListener('click', (e)=> {
        createTodo(todoInput.value);
        displayTodoArray();
    });
}

export {EventListeners}



