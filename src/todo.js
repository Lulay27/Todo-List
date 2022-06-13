// todo constructor
const todo = (title,note,due,prio) => {

    const getTitle = () => title;
    const getNote = () => note;
    const getDue = () => due;
    const getPrio = () => prio;


    return {getTitle,getNote,getDue,getPrio}
};

// function todo(title,note,due,prio) {
//     this.title = title;
//     this.note = note;
//     this.due = due;
//     this.prio = prio;
// }


// const todos = () => {
//     this.title = title;
//     this.note = note;
//     this.due = due;
//     this.prio = prio;
// }


export default todo;