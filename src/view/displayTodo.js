// import DOM constants?

import { isThisWeek, isToday, parseISO } from "date-fns";
import { todoArr } from "../model/editTodo";
import {Todo} from "../model/Todo.js"
import {todoContainer,todoInput,todayContainer,weekContainer} from '../view/domConstants.js';
import {createElement} from '../view/domHelperFunctions.js';

//NOTE IF WEEK/INBOX/TODAY end up looking the same
// combine sortTodo into displayInboxTodo and rename so only 1 forloop


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
function displayTodayTodo(todoDate) {
    const today = document.querySelector('.today-container');
    const todoElement = createElement("div",".today-obj")
    todoElement.innerHTML = `
    <div>
        ${todoDate}
    </div>
    `;
    today.appendChild(todoElement);
}

// display single todo in week tab
function displayWeekTodo(todoDate) {
    const week = document.querySelector('.week-container');
    const todoElement = createElement("div",".week-obj")
    todoElement.innerHTML = `
    <div>
        ${todoDate}
    </div>
    `;
    week.appendChild(todoElement);
}

function displayTodoArray() {
    todoInput.value ="";
    todoContainer.innerHTML="";
    
    for (let i = 0; i < todoArr.length; i++) {
        const todoDate = parseISO(todoArr[i].due);
        displayInboxTodo(todoArr[i].title,i);

        if (isThisWeek(todoDate) == true) {
            const week = document.querySelector('.week-container');
            week.innerHTML="";
            displayWeekTodo(todoArr[i].title);
        }

        if (isToday(todoDate) == true) {
            const today = document.querySelector('.today-container');
            today.innerHTML="";
            displayTodayTodo(todoArr[i].title);
        }
    }
}

export {
    displayInboxTodo,
    displayTodayTodo,
    displayWeekTodo,
    displayTodoArray,
};