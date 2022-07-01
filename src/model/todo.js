export class Todo {
    constructor(title,note,due,prio,id) {
        this.title = title;
        this.note = note;
        this.due = due;
        this.prio = prio;
        this.id = id;
    }
    
    get getId() {
        return this.id;
    }

    get getDue() {
        return this.due;
    }

    set setDue(newDue) {
        this.due = newDue;
    }

    get getNote() {
        return this.note;
    }

    set setNote(newNote) {
        this.note = newNote;
    }

    // add get/set for title later when adding function for that in view
}
