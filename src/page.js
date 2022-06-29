import DOM from "./DOM";
import {isThisWeek, parseISO, isToday} from 'date-fns';

const page = (name) => {
    document.querySelector('.main-title').innerHTML = name;
    
};

function UpcomingTodos() {  // creates today and week pages
    let todoToday;
    let todoWeek;

    for (let i = 0; i < DOM.myArr.length; i++) {
        const todoDate = parseISO(DOM.myArr[i].due);

        if (isThisWeek(todoDate) == true) {
            todoWeek = document.createElement("div");
            todoWeek.innerHTML = `
            <div>
                ${DOM.myArr[i].title} ${DOM.myArr[i].due} ${DOM.myArr[i].note}
            </div>
            `;
        }
        if (isToday(todoDate) == true) {
            todoToday = document.createElement("div");
            todoToday.innerHTML += `
            <div>
                ${DOM.myArr[i].title} ${DOM.myArr[i].due} ${DOM.myArr[i].note}
            </div>
            `;
        }        
    } 
    document.querySelector('.week-container').appendChild(todoWeek);
    document.querySelector('.today-container').appendChild(todoToday);
}



export default page;
export {UpcomingTodos};