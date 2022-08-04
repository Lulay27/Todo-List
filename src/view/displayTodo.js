// might move this into controller
import { isThisWeek, isToday, parseISO } from "date-fns";
import { todoArr } from "../model/editTodo";
import {todoContainer,todoInput,todayContainer,weekContainer} from '../view/domConstants.js';
import {createElement} from '../view/domHelperFunctions.js';
import exitImg from '../components/reject.png';
import infoImg from '../components/info.png';
import calImg from '../components/calendar.png';
import bookImg from '../components/edit.png';
import starzImg from '../components/star.png';
import goldStarImg from '../components/goldstar.png';
import { saveToLocalStorage } from "../model/storage";

function displayInboxTodo(index,todoTitle,todoNote,todoDate,todoPrio,todoCheck) {
    const todoElement = createElement("div","object");
    todoElement.id = index; // might not need this
    let prioImg;
    if (todoPrio == 0) {
        prioImg = starzImg;
    } else if (todoPrio == 1) {
        prioImg = goldStarImg;
    }
    let checkbox;
    if (todoCheck == 0) {
        checkbox = '';
    } else if (todoCheck == 1) {
        checkbox = ' checked';
    }

    todoElement.innerHTML = `
    <div class='todo-data${checkbox}'>
        <div class="todo-data-left">
            <input type="checkbox" class="checkBox"${checkbox}>
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
            <img class="xmark" src="${exitImg}">
            <img class="cal" src="${calImg}">
            <img class="book" src="${bookImg}">
            <img class="starz" src="${prioImg}">
            <img class="info-btn" src="${infoImg}">
        </div>
    </div>
    `;
    todoContainer.appendChild(todoElement);
}

//displays a single todo in today add to innerHTML
function displayTodayTodo(index,todoTitle,todoNote,todoDate,todoPrio,todoCheck) {
    const today = document.querySelector('.today-container');
    const todoElement = createElement("div","object");
    todoElement.id = index;
    let prioImg;
    if (todoPrio == 0) {
        prioImg = starzImg;
    } else if (todoPrio == 1) {
        prioImg = goldStarImg;
    }

    let checkbox;
    if (todoCheck == 0) {
        checkbox = '';
    } else if (todoCheck == 1) {
        checkbox = ' checked';
    }

    todoElement.innerHTML = `
    <div class='todo-data${checkbox}'>
        <div class="todo-data-left">
            <input type="checkbox" class="checkBox"${checkbox}>
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
            <img class="xmark" src="${exitImg}">
            <img class="cal" src="${calImg}">
            <img class="book" src="${bookImg}">
            <img class="starz" src="${prioImg}">
            <img class="info-btn" src="${infoImg}">
        </div>
    </div>
    `;
    today.appendChild(todoElement);
}

// display single todo in week tab
function displayWeekTodo(index,todoTitle,todoNote,todoDate,todoPrio,todoCheck) {
    const week = document.querySelector('.week-container');
    const todoElement = createElement("div","object");
    todoElement.id = index;
    let prioImg;
    if (todoPrio == 0) {
        prioImg = starzImg;
    } else if (todoPrio == 1) {
        prioImg = goldStarImg;
    }

    let checkbox;
    if (todoCheck == 0) {
        checkbox = '';
    } else if (todoCheck == 1) {
        checkbox = ' checked';
    }

    todoElement.innerHTML = `
    <div class='todo-data${checkbox}'>
        <div class="todo-data-left">
            <input type="checkbox" class="checkBox"${checkbox}>
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
            <img class="xmark" src="${exitImg}">
            <img class="cal" src="${calImg}">
            <img class="book" src="${bookImg}">
            <img class="starz" src="${prioImg}">
            <img class="info-btn" src="${infoImg}">
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
        displayInboxTodo(i,todoArr[i].title,todoArr[i].note,todoArr[i].due,todoArr[i].prio,todoArr[i].check);

        if (isThisWeek(todoDate) == true) {
            displayWeekTodo(i,todoArr[i].title,todoArr[i].note,todoArr[i].due,todoArr[i].prio,todoArr[i].check);
        }

        if (isToday(todoDate) == true) {
            displayTodayTodo(i,todoArr[i].title,todoArr[i].note,todoArr[i].due,todoArr[i].prio,todoArr[i].check);
        }
    }
    saveToLocalStorage();
}

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