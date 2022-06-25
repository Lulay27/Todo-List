import Todo, { render, removeObj } from './todo.js';
import page from './page.js';

const DOM = (() => {

    const menuBtn = document.querySelector('.menu-btn');
    const nonMenu = document.querySelector('.main');
    const submitBtn = document.querySelector('.plus-btn');
    const sideBar = document.querySelector('.side-bar');
    const container = document.querySelector('.container');
    // const todoBtns = document.querySelector('.todo-data-right');
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
    // todoBtns.addEventListener('click',todoFunc);

    const todoBtns = document.querySelector('.todo-container');
        todoBtns.addEventListener('click',testerzz);
        function testerzz(e) {
            console.log(e.target.id);
            if (e.target.id == 'xmark') {
                e.target.parentElement.parentElement.remove();
            }
            if (e.target.id == 'cal') {
                // remove icons and display calander input with check mark svg
            }
            if (e.target.id == 'book') {
                // remove icons and display large input box with check mark svg
            }
            if (e.target.id == 'starz') {
                e.target.parentElement.parentElement.style.backgroundColor ='gold';
                // highlight in yellow ??
            }
            
        }

    function removeCheckedBox(e) {
        // console.log(e.target.id);
        // console.log(e.target.type);

        if (e.target.type == 'checkbox' || e.target.className == 'cross-btn') {
            e.target.parentElement.parentElement.remove();
        }

    }

    function sideBarBtn(e) {
        if (e.target.id == 'inbox-btn') {
            page('Inbox');
        }
        if (e.target.id == 'today-btn') {
            page('Today');
        }
        if (e.target.id == 'week-btn') {
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

    // function editTodo.... edit note/date/prio of todo 

    return {
        myArr
    };

})();

export default DOM;