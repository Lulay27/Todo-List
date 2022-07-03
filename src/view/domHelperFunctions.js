import { addTodo } from '../model/editTodo.js';
// import * as Todo from "../model/Todo.js";
import {Todo} from "../model/Todo.js";

// creates todo with setTitle(value) and adds that todo to array
export function createTodo(value) {
    const newTodo = new Todo();
    newTodo.title = value;
    addTodo(newTodo);
}

export function createElement(tag,className) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);

    return element;
}

// only use inside when element hasnt been created yet b/c im using constants already created
// gets element with class or id
export function getElement(selector) {
    return element = document.querySelector(selector);
    // return element;
}

