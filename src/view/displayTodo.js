// might move this into controller

import { isThisWeek, isToday, parseISO } from "date-fns";
import { todoArr } from "../model/editTodo";
// import {Todo} from "../model/Todo.js"
import {todoContainer,todoInput,todayContainer,weekContainer} from '../view/domConstants.js';
import {createElement} from '../view/domHelperFunctions.js';
import exitImg from '../components/reject.png';
import infoImg from '../components/info.png';

//NOTE IF WEEK/INBOX/TODAY end up looking the same
// combine displayInbox/today/weekTodo into displayPageTodo so only 1 function


// displays (single) the object and assigns it an index id
// going to move forloop outside this function so this
// becomes a true view module
function displayInboxTodo(index,todoTitle,todoNote,todoDate,todoPrio) {
    const todoElement = createElement("div","object");
    todoElement.id = index; // might not need this

    // testing UI looks adding date to todo title container
    todoElement.innerHTML = `
    <div class='todo-data'>
        <div class="todo-data-left">
            <input type="checkbox" class="checkBox">
            <div id=title-value>
                ${todoTitle}
            </div>
        </div>
        <div class="todo-data-mid">
            <div id=date-value>
                ${todoDate}
            </div>
        </div>
        <div class="todo-data-right">
            <button class="xmark"><i id ="xmark-img" class="fa fa-xmark"></i></button>
            <button class="cal"><i id ="cal-img" class="fa fa-calendar-days"></i></button>
            <button class="book"><i id ="book-img" class="fa fa-book-open"></i></button>
            <button class="starz"><i id ="starz-img" class="fa fa-star"></i></button>
            <img class="info-btn" src="${infoImg}">
        </div>
    </div>
    `;
    todoContainer.appendChild(todoElement);
}

//displays a single todo in today add to innerHTML
function displayTodayTodo(todoTitle,todoNote,todoDate,todoPrio) {
    const today = document.querySelector('.today-container');
    const todoElement = createElement("div",".today-todo-container")
    todoElement.innerHTML = `
    <div class='todo-data'>
        <div class="todo-data-left">
            <div id=title-value>
                ${todoTitle}
            </div>
        </div>
        <div class="todo-data-mid">
            <div id=date-value>
                ${todoDate}
            </div>
        </div>
        <div class="todo-data-right">
            <div id=note-value>
                ${todoNote}
            </div>
        </div>
    </div>
`;
    today.appendChild(todoElement);
}

// display single todo in week tab
function displayWeekTodo(todoTitle,todoNote,todoDate,todoPrio) {
    const week = document.querySelector('.week-container');
    const todoElement = createElement("div",".week-obj")
    todoElement.innerHTML = `
    <div class='todo-data'>
        <div class="todo-data-left">
            <div id=title-value>
                ${todoTitle}
            </div>
        </div>
        <div class="todo-data-mid">
            <div id=date-value>
                ${todoDate}
            </div>
        </div>
        <div class="todo-data-right">
            <div id=note-value>
                ${todoNote}
            </div>
        </div>
    </div>
`;
    week.appendChild(todoElement);
}

// resets all innerHTML's for inbox/today/week and displays new todoArr contents
function displayTodoArray() {
    todoInput.value ="";
    todoContainer.innerHTML="";
    const week = document.querySelector('.week-container');
    const today = document.querySelector('.today-container');
    week.innerHTML="";
    today.innerHTML="";
    
    for (let i = 0; i < todoArr.length; i++) {
        const todoDate = parseISO(todoArr[i].due);
        displayInboxTodo(i,todoArr[i].title,todoArr[i].note,todoArr[i].due,todoArr[i].prio);

        if (isThisWeek(todoDate) == true) {
            displayWeekTodo(todoArr[i].title,todoArr[i].note,todoArr[i].due,todoArr[i].prio);
        }

        if (isToday(todoDate) == true) {
            displayTodayTodo(todoArr[i].title,todoArr[i].note,todoArr[i].due,todoArr[i].prio);
        }
    }
}

//tester function for popup
function popupTest(todoTitle,todoNote,todoDate,todoPrio) {
    const tester = document.querySelector('.popup-background');
    tester.style.display = 'flex';
    const popup = document.querySelector('.popup-background');
    popup.innerHTML = `
    <div class="popup-container">
        <div class="popup-title test"><b>${todoTitle}</b></div>
        <div class="popup-due test"><b>Due:</b> ${todoDate} </div>
        <div class="popup-notes test"><b>Notes:</b> ${todoNote} </div>
        <img class="popup-exit" src="${exitImg}">
    </div>
    `;
}

export {
    displayInboxTodo,
    displayTodayTodo,
    displayWeekTodo,
    displayTodoArray,
    popupTest
};