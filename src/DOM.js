const DOM = (() => {

    const todo = document.querySelector('.add-todo-btn');
    todo.addEventListener('click', display);

    function display(e) {
    document.querySelector('.todo-form').style.display = 'block';

}
})();




export default DOM;