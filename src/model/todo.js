// import endOfDay from "date-fns/endOfDay";
export class Todo {
    constructor(title = '',note = '',due = '',prio = 0 ,id = '', check = 0) {
        this.title = title;
        this.note = note;
        this.due = due;
        this.prio = prio;
        this.id = id;
        this.check = check;
    }
    // get title() {
    //     return this._title;
    // }

    // set title(newTitle) {
    //     if (newTitle) {
    //         return this._title = newTitle;
    //     }
    // }

    // get prio() {
    //     return this._prio;
    // }

    // set prio(newPrio) {
    //     if (newPrio) {
    //         this._prio = newPrio;
    //     }
    // }
    
    // get due() {
    //     return this._due;
    // }

    // set due(newDue) {
    //     if (newDue) {
    //         this._due = newDue;    
    //     }
    // }

    // get note() {
    //     return this._note;
    // }

    // set note(newNote) {
    //     if (newNote) {
    //         this._note = newNote;    
    //     }
    // }

    // get id() {
    //     return this._id;
    // }

    // set id(newId) {
    //     if (newId) {
    //         this._id = newId;
    //     }
    // }
}
