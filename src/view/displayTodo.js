// displays the object and assigns it an index id
// going to move forloop outside this function so this
// becomes a true view module
function displayInboxTodo(name,index) {
    todoContainer.innerHTML="";
    // for (let i = 0; i < todoArr.length; i++) {
        const todoElement = createElement("div","object");
        todoElement.id = index; // might not need this
        todoElement.innerHTML = `
        <div class='todo-data'>
            <div class="todo-data-left">
                <input type="checkbox" class="checkBox">
                <div id=title-value>
                    ${name}
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
        todoContainer.appendChild(todoElement);
    // }
}

function displayTodayTodo() {

}