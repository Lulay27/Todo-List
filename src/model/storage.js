import {todoArr} from './editTodo.js';

// for onLoad() function to look for data from localstorage

export function retrieveLocalStorage() {
    if (localStorage.getItem('todoArray') == null) {
        saveToLocalStorage();
    } else {
        if (todoArr[0] != null) {
            todoArr = JSON.parse(localStorage.getItem('todoArray'));
        }
        
    }
}

// everytime a todo is edited send todoArr to localstorage
export function saveToLocalStorage() {
    
    localStorage.setItem('todoArray', JSON.stringify(todoArr));
}