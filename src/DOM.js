import Todo, { render } from './todo.js';
import page from './page.js';

const DOM = (() => {

    const menuBtn = document.querySelector('.menu-btn');
    const nonMenu = document.querySelector('.main');
    const submitBtn = document.querySelector('.plus-btn');
    const sideBar = document.querySelector('.side-bar');
    const docPage = document.querySelector('.container');
    const myArr = [];
    menuBtn.addEventListener('click',sideBarDis);
    nonMenu.addEventListener('click',sideBarOff);
    submitBtn.addEventListener('click',addTitle);
    sideBar.addEventListener('click', sideBarBtn);
    docPage.addEventListener('click', removeCheckedBox);
    
    function removeCheckedBox(e) {
        for (let i = 0; i < DOM.myArr.length; i++) {
            if (document.querySelector(`.checkbox${i}`) != null) {
                const box = document.querySelector(`.checkbox${i}`);
                if (box.checked == true) {
                    box.parentElement.parentElement.remove();
                }
            }
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
        const title = document.querySelector('#todo-input').value;
        const newTodo = new Todo(title);
        myArr.push(newTodo);
        render();
    }

    // function editTodo.... edit note/date/prio of todo 

    return {
        myArr
    };

})();

export default DOM;