import DOM from './DOM.js'

let todoUI;
function render() {
    for (let i = 0; i < DOM.myArr.length; i++) {
        todoUI = document.createElement("div");
        todoUI.id = "object" + i;
        todoUI.innerHTML += `
        <div class='todo-data'>
            <input type="checkbox" id="checkbox${i}" class="checkBox">
            ${DOM.myArr[i].title}
            <button id = 'cross-btn'><i class="fa fa-xmark"></i></button>
            <button ><i class="fa fa-calendar"></i></button>
            <button ><i class="fa fa-notes"></i></button>
            <button ><i class="fa fa-star"></i></button>
        </div>
        
        `;

    }
    document.querySelector('.todo-container').appendChild(todoUI);
}

function Todo(title,note,due,prio) {
    this.title = title;
    this.note = note;
    this.due = due;
    this.prio = prio;
}

export default Todo;
export {render};