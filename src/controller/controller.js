import { deleteTodo } from '../model/editTodo.js';
import { displayTodoArray } from '../view/displayTodo.js';
import {submitBtn,todoInput,todoBtns, calendarHTML, bookHTML, TodoIconsHTML} from '../view/domConstants.js';
import { createTodo } from '../view/domHelperFunctions.js';


const EventListeners = () => {
    // submitting a todo
    submitBtn.addEventListener('click', (e) => {
        createTodo(todoInput.value);
        displayTodoArray();
    });

    // todo edit functionality
    todoBtns.addEventListener('click', (e) => {
        if (e.target.matches('.cal')) {
            e.target.parentElement.innerHTML = calendarHTML;
        }
        if (e.target.matches('.book')) {
            e.target.parentElement.innerHTML = bookHTML;
        }
        if (e.target.matches('.starz')) {
            // something later maybe 3 levels of prio
        }

        if (e.target.type == 'checkbox' || e.target.matches('.xmark')) {
            const index = e.target.closest('.object').id;
            deleteTodo(index);
            displayTodoArray();
        }
        if (e.target.matches('.starz')) {
            // something later maybe 3 levels of prio
        }



        if (e.target.matches('.date-check')) {

        }
        if (e.target.matches('.note-check')) {

        }
    })



}

export {EventListeners}



