import Todo from './todo.js';
import page from './page.js';

const DOM = (() => {

    // DOM constants
    // const todo = document.querySelector('.add-todo-btn');
    const form = document.querySelector('.form-container');
    const menuBtn = document.querySelector('.menu-btn');
    const nonMenu = document.querySelector('.main');
    const submitBtn = document.querySelector('.submit-btn');
    const sideBar = document.querySelector('.side-bar');
    const myArr = [];
    // Event Listeners
    // todo.addEventListener('click', todoFormDis);
    menuBtn.addEventListener('click',sideBarDis);
    nonMenu.addEventListener('click',sideBarOff);
    submitBtn.addEventListener('click',addTodo)
    sideBar.addEventListener('click', sideBarBtn)

    // function todoFormDis(e) {
    //     if (form.style.display == 'block') {
    //         form.style.display = 'none';
    //     }
    //     else if (form.style.display == 'none') {
    //         form.style.display = 'block';
    //     }
    // }

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

    function addTodo(e) {
        const title = document.querySelector('#title-txt').value;
        const dueDate = document.querySelector('#due-txt').value;
        const prio = document.querySelector('#prio-txt').value;
        const note = document.querySelector('#note-txt').value;
        const newTodo = new Todo(title,dueDate,prio,note);
        myArr.push(newTodo);
        alert(DOM.myArr[0]);
    }

    return {
        myArr
    };

})();

export default DOM;