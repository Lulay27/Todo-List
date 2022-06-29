import DOM from './DOM.js'

let todoUI;
function render() {
    for (let i = 0; i < DOM.myArr.length; i++) {
        todoUI = document.createElement("div");
        todoUI.id = i;
        todoUI.className = "object";
        todoUI.innerHTML += `
        <div class='todo-data'>
            <div class="todo-data-left">
                <input type="checkbox" id="checkbox${i}" class="checkBox">
                <div id=title-value>
                    ${DOM.myArr[i].title}
                </div>
            </div>
            <div class="todo-data-right">
                <i id="xmark" class="fa fa-xmark"></i>
                <i id="cal" class="fa fa-calendar-days"></i>
                <i id="book" class="fa fa-book-open"></i>
                <i id="starz" class="fa fa-star"></i>
            </div>
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

// function to display all attributes

export default Todo;
export {render};