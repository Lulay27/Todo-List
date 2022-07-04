import { deleteTodo, todoArr } from '../model/editTodo.js';
import { displayTodoArray } from '../view/displayTodo.js';
import {submitBtn,todoInput,todoBtns, calendarHTML, bookHTML, menuBtn, main} from '../view/domConstants.js';
import { createTodoTitle } from '../view/domHelperFunctions.js';
import { sidebarLength } from '../view/uiDOM.js';

//test
// const tester = document.querySelector('.menu-btn');

const EventListeners = () => {
    // submitting a todo
    submitBtn.addEventListener('click', (e) => {
        createTodoTitle(todoInput.value);
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
            const index = e.target.closest('.object').id;   // make this a function?
            deleteTodo(index);
            displayTodoArray();
        }
        
        if (e.target.matches('.date-check')) {
            const index = e.target.closest('.object').id;
            const calValue = e.target.previousElementSibling.value;
            todoArr[index].due = calValue;
            displayTodoArray();
        }
        if (e.target.matches('.note-check')) {

        }
    })

    // menuBtn.addEventListener('click', (e) => {  // might combine these listeners into main.
    //     if(e.target.class = 'menu-btn') {
    //         console.log('peanuts');
    //     }
    //     sidebarLength('200');
    // })

    // click on menu button displays menu clicking elsewhere removes it
    let status = 'closed';
    document.addEventListener('click', (e) => {
        if (e.target.id == 'menu-icon') {
            if (status == 'closed') {
                sidebarLength('200');
                status = 'open';
            }
        } else if (status == 'open') {
            sidebarLength('0');
            status = 'closed';
        }
    })
}

export {EventListeners}



