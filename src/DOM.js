import Todo, { render, removeObj } from './todotester.js';
import page from './page.js';
import { UpcomingTodos } from './page.js';

const DOM = (() => {

    const menuBtn = document.querySelector('.menu-btn');
    const nonMenu = document.querySelector('.main');
    const submitBtn = document.querySelector('.plus-btn');
    const sideBar = document.querySelector('.side-bar');
    const container = document.querySelector('.container');
    const todoBtns = document.querySelector('.todo-container');
    const myArr = [
        {
        title: 'prepare for hockey',
        note: 'make sure all gear is in bag',
        prio: 1,
        due: '2022-10-27',
    },
    ];
    menuBtn.addEventListener('click',sideBarDis);
    nonMenu.addEventListener('click',sideBarOff);
    submitBtn.addEventListener('click',addTitle);
    sideBar.addEventListener('click', sideBarBtn);
    container.addEventListener('click', removeCheckedBox);
    todoBtns.addEventListener('click',todoEdit);

    function todoEdit(e) {
        if (e.target.matches('.cal')) {
            e.target.parentElement.innerHTML = `
            <div>
                <input type="date" id="date-input">
                <button class="date-check"><i id="date-check-img" class="fa fa-check"></i></button>
            </div>
            `;
        }
        if (e.target.matches('.book')) {
            e.target.parentElement.innerHTML = `
            <div>
                <input type="text" id="note-input" placeholder="Notes">
                <button class="note-check"><i id="note-check-img" class="fa fa-check"></i></button>
            </div>
            `;
        }
        if (e.target.matches('.starz')) {
            // nothing yet
        }

        if (e.target.matches('.date-check')) {
            // replace this long line of text with e.target.closest() method
            const index = e.target.closest('.object').id;
            const calValue = e.target.previousElementSibling.value;
            myArr[index].due = calValue;
            UpcomingTodos();
            e.target.parentElement.parentElement.innerHTML = `
                <button class="xmark"><i id ="xmark-img" class="fa fa-xmark"></i></button>
                <button class="cal"><i id ="cal-img" class="fa fa-calendar-days"></i></button>
                <button class="book"><i id ="book-img" class="fa fa-book-open"></i></button>
                <button class="starz"><i id ="starz-img" class="fa fa-star"></i></button>
            `;
        }
        if (e.target.matches('.note-check')) {
            const index = e.target.closest('.object').id;
            const noteValue = e.target.previousElementSibling.value;
            myArr[index].note = noteValue;
            e.target.parentElement.parentElement.innerHTML = `
                <button class="xmark"><i id ="xmark-img" class="fa fa-xmark"></i></button>
                <button class="cal"><i id ="cal-img" class="fa fa-calendar-days"></i></button>
                <button class="book"><i id ="book-img" class="fa fa-book-open"></i></button>
                <button class="starz"><i id ="starz-img" class="fa fa-star"></i></button>
            `;
        }
    }

    function removeCheckedBox(e) {
        if (e.target.type == 'checkbox' || e.target.matches('.xmark')) {
            const index = e.target.closest('.object').id;
            DOM.myArr.splice(index,1);
            e.target.parentElement.parentElement.remove();  // change this to closest
            render();
        }
    }
    // change to matches later for all if statements
    function sideBarBtn(e) {
        if (e.target.id == 'inbox-btn') {   //matches change
            document.querySelector('.task-container').style.display = "block";
            document.querySelector('.week-container').style.display = "none";
            document.querySelector('.today-container').style.display = "none";
            page('Inbox');
        }
        if (e.target.id == 'today-btn') {
            document.querySelector('.today-container').style.display = "block";
            document.querySelector('.week-container').style.display = "none";
            document.querySelector('.task-container').style.display = "none";
            page('Today');
        }
        if (e.target.id == 'week-btn') {
            document.querySelector('.week-container').style.display = "block";
            document.querySelector('.task-container').style.display = "none";
            document.querySelector('.today-container').style.display = "none";
            page('Week');
        }
        if (e.target.id == 'projects-btn') {
            page('Projects');
        }
    }

    function sideBarDis(e) {
        document.querySelector('.side-bar').style.width = '200px';
        document.querySelector('.main').style.marginLeft = '200px';
    }

    function sideBarOff(e) {
        document.querySelector('.side-bar').style.width = '0px';
        document.querySelector('.main').style.marginLeft = '0px';
    }

    function addTitle(e) { 
        const title = document.querySelector('#todo-input');
        const newTodo = new Todo(title.value);
        myArr.push(newTodo);
        title.value ='';
        render();
    }

    return {
        myArr
    };

})();

export default DOM;