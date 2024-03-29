
export const TodoIconsHTML = `
<button class="xmark"><i id ="xmark-img" class="fa fa-xmark"></i></button>
<button class="cal"><i id ="cal-img" class="fa fa-calendar-days"></i></button>
<button class="book"><i id ="book-img" class="fa fa-book-open"></i></button>
<button class="starz"><i id ="starz-img" class="fa fa-star"></i></button>
`;

export const calendarHTML = `
<div>
    <input type="date" id="date-input">
    <button class="date-check"><i id="date-check-img" class="fa fa-check"></i></button>
</div>
`;

export const bookHTML = `
<div>
    <input type="text" id="note-input" placeholder="Notes">
    <button class="note-check"><i id="note-check-img" class="fa fa-check"></i></button>
</div>
`;

export const menuBtn = document.querySelector('.menu-btn');
export const main = document.querySelector('.main');
const mainContainer = document.querySelector('.main-container');
export const submitBtn = document.querySelector('.plus-btn');
export const sideBar = document.querySelector('.side-bar');
const container = document.querySelector('.container');
export const todoContainer = document.querySelector('.todo-container');     // problem
export const weekContainer = document.querySelector('.week-container');     // problem same. Detail in index.js
export const todayContainer = document.querySelector('.today-container');
export const todoInput = document.querySelector('#todo-input');
export const todoBtns = document.querySelector('.main-container');
export const popupBackGround = document.querySelector('.popup-background');
export const popupContainer = document.querySelector('.popup-container');