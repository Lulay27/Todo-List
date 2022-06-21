import Todo from './todo.js';
import page from './page.js';

const DOM = (() => {

    // DOM constants
    const form = document.querySelector('.form-container');
    const menuBtn = document.querySelector('.menu-btn');
    const nonMenu = document.querySelector('.main');
    const submitBtn = document.querySelector('.plus-btn');
    const sideBar = document.querySelector('.side-bar');
    const myArr = [];
    // Event Listeners
    menuBtn.addEventListener('click',sideBarDis);
    nonMenu.addEventListener('click',sideBarOff);
    submitBtn.addEventListener('click',addTitle)
    sideBar.addEventListener('click', sideBarBtn)

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

    // fix this b/c changed UI to input title first and add other data l8r
    function addTitle(e) { 
        const title = document.querySelector('#title-input').value;
        // const dueDate = document.querySelector('#due-txt').value;
        // const prio = document.querySelector('#prio-txt').value;
        // const note = document.querySelector('#note-txt').value;
        const newTodo = new Todo(title);
        myArr.push(newTodo);
        // function to display todo
        console.log(DOM.myArr[0]);
    }

    // function editTodo.... edit note/date/prio of todo 

    return {
        myArr
    };

})();

export default DOM;