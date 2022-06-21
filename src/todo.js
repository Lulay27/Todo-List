import DOM from './DOM.js'


// iterate through array containing todos, located in DOM.js
//testing create div with innerhtml containing array titles i..
let titlediv;
function render() {
    for (let i = 0; i < DOM.myArr.length; i++) {
        const main = document.querySelector('.main');
        titlediv = document.createElement('div');
        titlediv.innerHTML = DOM.myArr[i].title;
        
    }
    
    document.querySelector('.main').appendChild(titlediv);
    //test to see if this imports ok it works

    // const main = document.querySelector('.main');
    // const test = document.createElement('div');
    // test.innerHTML = "hey Eric :)";
    // main.appendChild(test);

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