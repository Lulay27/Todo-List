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
        </div>
        `;

        // i think solution to objects not reseting is having splice function within single for loop so here

        
    }
    document.querySelector('.todo-container').appendChild(todoUI);
}

function removeObj(num) {
    const index = DOM.myArr.indexOf(num);
    if (index > -1) {
        DOM.myArr.splice(num,1);
    }
}

function Todo(title,note,due,prio) {
    this.title = title;
    this.note = note;
    this.due = due;
    this.prio = prio;
}

export default Todo;
export {render,removeObj};