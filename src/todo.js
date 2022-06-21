import DOM from './DOM.js'


// iterate through array containing todos, located in DOM.js
//testing create div with innerhtml containing array titles i..

function render() {
    for ( let i = 0; i < DOM.myArr.length; i++) {
        const main = document.querySelector('.main');
        const test = document.createElement('div');
        test.innerHTML = DOM.myArr[i].title;
        main.appendChild(test);
    }
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