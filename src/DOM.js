const DOM = (() => {

    // DOM constants
    const todo = document.querySelector('.add-todo-btn');
    const form = document.querySelector('.form-container');
    const menuBtn = document.querySelector('.menu-btn');
    const nonMenu = document.querySelector('.main');
    const submitBtn = document.querySelector('.submit-btn');
    // Event Listeners
    todo.addEventListener('click', todoFormDis);
    menuBtn.addEventListener('click',sideBarDis);
    nonMenu.addEventListener('click',sideBarOff);
    submitBtn.addEventListener('click',submitTodo)

    function todoFormDis(e) {
        if (form.style.display == 'block') {
            form.style.display = 'none';
        }
        else if (form.style.display == 'none') {
            form.style.display = 'block';
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

    function submitTodo(e) {
        const title = document.querySelector('#title-txt').value;
        alert(title);
    }

    return {

    }

})();

export default DOM;