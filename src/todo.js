import DOM from './DOM.js'

// iterate through array containing todos, located in DOM.js
//testing create div with innerhtml containing array titles i..
let todoUI;
function render() {
    for (let i = 0; i < DOM.myArr.length; i++) {
        // titlediv = document.createElement('li');
        // titlediv.id = "object" + i;
        // const checkBox = document.createElement('input');

        // titlediv.innerHTML = DOM.myArr[i].title;
        
        // checkBox.type = 'checkbox';
        // titlediv.appendChild(checkBox);
        // getting complicated should I just create the html inside a single innerHTML line?
        //test

        todoUI = document.createElement("div");
        todoUI.id = "object" + i;
        todoUI.innerHTML += `
        <div class='todo-data'>
            <input type="checkbox">
            ${DOM.myArr[i].title}
        </div>
        `


    }
    // const checkBox = document.createElement('input');
    // checkBox.type = 'checkbox';
    
    document.querySelector('.todo-container').appendChild(todoUI);
}
// todo constructor factory
// const todo = (title,note,due,prio) => {
//     const getTitle = () => title;
//     const getNote = () => note;
//     const getDue = () => due;
//     const getPrio = () => prio;
//     return {getTitle,getNote,getDue,getPrio}
// };

// traditional constructor
function Todo(title,note,due,prio) {
    this.title = title;
    this.note = note;
    this.due = due;
    this.prio = prio;
}

export default Todo;
export {render};