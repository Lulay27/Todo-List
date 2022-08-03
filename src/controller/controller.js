import { deleteTodo, todoArr } from '../model/editTodo.js';
import { displayTodoArray, popupTest } from '../view/displayTodo.js';
import {submitBtn,todoInput,todoBtns, calendarHTML, bookHTML, sideBar, popupBackGround, popupContainer} from '../view/domConstants.js';
import { createTodoTitle } from '../view/domHelperFunctions.js';
import { displayInboxPage, displayTodayPage, displayWeekPage, sidebarLength } from '../view/uiDOM.js';
import checkImg from '../components/check.png';

const EventListeners = () => {

    // submitting a todo
    submitBtn.addEventListener('click', (e) => {
        createTodoTitle(todoInput.value);
        displayTodoArray();
    });

    // editing a single todo
    todoBtns.addEventListener('click', (e) => {

        // strike through text after marking checkbox
        if (e.target.type == 'checkbox') {
            if (e.target.checked == true) {
                e.target.closest('.object').classList.add('checked');
            } else
            e.target.closest('.object').classList.remove('checked');
        }
        if (e.target.matches('.cal')) {             // turn this into function displaySavedDate
            const index = e.target.closest('.object').id;
            e.target.parentElement.innerHTML = `
            <div class="date-container">
                <input type="date" id="date-input" value="${todoArr[index].due}">
                <img class="date-check" src="${checkImg}">
            </div>
            `;
        }
        if (e.target.matches('.book')) {            // turn this into function displaySavedNote
            const index = e.target.closest('.object').id;
            e.target.parentElement.innerHTML = `
            <textarea type="text" id="note-input">${todoArr[index].note}</textarea>
            <img class="note-check" src="${checkImg}">
            `;
        }
        if (e.target.matches('.starz')) {
            const index = e.target.closest('.object').id;
            if (todoArr[index].prio == 0) {
                todoArr[index].prio++;
            } else {
                todoArr[index].prio = 0;
            }
            displayTodoArray();
        }
        // deleting todo
        if (e.target.matches('.xmark')) {
            const index = e.target.closest('.object').id;   // make this a function?
            console.log('poop');
            deleteTodo(index);
            displayTodoArray();
        }
        
        // adds date input to e.target todo obj
        if (e.target.matches('.date-check')) {
            const index = e.target.closest('.object').id;
            const calValue = e.target.previousElementSibling.value;
            todoArr[index].due = calValue;
            displayTodoArray();
        }
        // adds note input to e.target todo obj
        if (e.target.matches('.note-check')) {
            const index = e.target.closest('.object').id;
            const noteValue = e.target.previousElementSibling.value;
            e.target.previousElementSibling.value = noteValue;
            todoArr[index].note = noteValue;
            displayTodoArray();
        }
        // displaying information about todo
        if (e.target.matches('.info-btn')) {
            const index = e.target.closest('.object').id;
            popupTest(todoArr[index].title,todoArr[index].note,todoArr[index].due,todoArr[index].prio);
        }
    })

    // pressing exit button exits out of popup  have to select cause of onLoad()
    document.querySelector('.popup-background').addEventListener('click', (e) => {
        if (e.target.className == 'popup-exit') {
            document.querySelector('.popup-background').style.display = 'none';
        }
    })

    // displaying and removing sidebar
    let status = 'closed';
    document.addEventListener('click', (e) => {
        if (e.target.className == 'menu-btn') {
            if (status == 'closed') {
                sidebarLength('200');
                status = 'open';
            }
        } else if (status == 'open') {
            sidebarLength('0');
            status = 'closed';
        }
    })

    // displaying pages after clicking on sidebar btns
    sideBar.addEventListener('click', (e) => {
        if (e.target.className == 'inbox-btn') {
            displayInboxPage();
        }

        if (e.target.className == 'today-btn') {
            displayTodayPage();
        }

        if (e.target.className == 'week-btn') {
            displayWeekPage();
        }
    })
    
}

export {EventListeners}



