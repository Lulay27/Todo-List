import DOM from './DOM.js'

function render() { // displays todos in inbox controller
    const todoContainer = document.querySelector('.todo-container');
    todoContainer.innerHTML="";
    for (let i = 0; i < DOM.myArr.length; i++) {
    
        const todoUI = document.createElement("div");
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
                <button class="xmark"><i id ="xmark-img" class="fa fa-xmark"></i></button>
                <button class="cal"><i id ="cal-img" class="fa fa-calendar-days"></i></button>
                <button class="book"><i id ="book-img" class="fa fa-book-open"></i></button>
                <button class="starz"><i id ="starz-img" class="fa fa-star"></i></button>
            </div>
        </div>
        `;
        todoContainer.appendChild(todoUI);
    }
    
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