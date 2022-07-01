
const TodoIconsHTML = `
<button class="xmark"><i id ="xmark-img" class="fa fa-xmark"></i></button>
<button class="cal"><i id ="cal-img" class="fa fa-calendar-days"></i></button>
<button class="book"><i id ="book-img" class="fa fa-book-open"></i></button>
<button class="starz"><i id ="starz-img" class="fa fa-star"></i></button>
`;

const calendarHTML = `
<div>
    <input type="date" id="date-input">
    <button class="date-check"><i id="date-check-img" class="fa fa-check"></i></button>
</div>
`;

const bookHTML = `
<div>
    <input type="text" id="note-input" placeholder="Notes">
    <button class="note-check"><i id="note-check-img" class="fa fa-check"></i></button>
</div>
`;

// must exist intially so week/today must be created inside controller functions
// might turn this into object so its private since some names are repeated ex. main
const menuBtn = document.querySelector('.menu-btn');
const main = document.querySelector('.main');
const mainContainer = document.querySelector('.main-container');
const submitBtn = document.querySelector('.plus-btn');
const sideBar = document.querySelector('.side-bar');
const container = document.querySelector('.container');
const todoContainer = document.querySelector('.todo-container');
const weekContainer = document.querySelector('.week-container');
const todayContainer = document.querySelector('.today-container');
// const array for obj??

