// import DOM constants?

import { isThisWeek, isToday, parseISO } from "date-fns";
import { todoArr } from "../model/editTodo";
// import {Todo} from "../model/Todo.js"
import {todoContainer,todoInput,todayContainer,weekContainer} from '../view/domConstants.js';
import {createElement} from '../view/domHelperFunctions.js';

//NOTE IF WEEK/INBOX/TODAY end up looking the same
// combine displayInbox/today/weekTodo into displayPageTodo so only 1 function


// displays (single) the object and assigns it an index id
// going to move forloop outside this function so this
// becomes a true view module
function displayInboxTodo(todoName,index) {
    const todoElement = createElement("div","object");
    todoElement.id = index; // might not need this
    todoElement.innerHTML = `
    <div class='todo-data'>
        <div class="todo-data-left">
            <input type="checkbox" class="checkBox">
            <div id=title-value>
                ${todoName}
            </div>
        </div>
        <div class="todo-data-right">
            <button class="xmark"><i id ="xmark-img" class="fa fa-xmark"></i></button>
            <button class="cal"><i id ="cal-img" class="fa fa-calendar-days"></i></button>
            <button class="book"><i id ="book-img" class="fa fa-book-open"></i></button>
            <button class="starz"><i id ="starz-img" class="fa fa-star"></i></button>
        </div>
    </div>
    `;
    todoContainer.appendChild(todoElement);
}

//displays a single todo in today add to innerHTML
function displayTodayTodo(todoTitle,todoNote,todoDate,todoPrio) {
    const today = document.querySelector('.today-container');
    const todoElement = createElement("div",".today-obj")
    todoElement.innerHTML = `
    <div>
        <li> ${todoTitle} </li>
        <li> ${todoNote} </li>
        <li> ${todoDate} </li>
        <li> ${todoPrio} </li>    
    </div>
    `;
    today.appendChild(todoElement);
}

// display single todo in week tab
function displayWeekTodo(todoTitle,todoNote,todoDate,todoPrio) {
    const week = document.querySelector('.week-container');
    const todoElement = createElement("div",".week-obj")
    todoElement.innerHTML = `
    <div>
        <li> ${todoTitle} </li>
        <li> ${todoNote} </li>
        <li> ${todoDate} </li>
        <li> ${todoPrio} </li>
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
        displayInboxTodo(todoArr[i].title,i);

        if (isThisWeek(todoDate) == true) {
            displayWeekTodo(todoArr[i].title);
        }

        if (isToday(todoDate) == true) {
            displayTodayTodo(todoArr[i].title,todoArr[i].note,todoArr[i].due,todoArr[i].prio);
        }
    }
}

export {
    displayInboxTodo,
    displayTodayTodo,
    displayWeekTodo,
    displayTodoArray,
};