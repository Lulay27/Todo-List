import DOM from "./DOM";
import {isThisWeek, parseISO, isToday} from 'date-fns';

const page = (name) => {
    document.querySelector('.main-title').innerHTML = name;
    
};

function UpcomingTodos() {  // creates today and week pages

    // for (let i = 0; i < DOM.myArr.length; i++) {
        const i = DOM.myArr.length-1;
        const todoDate = parseISO(DOM.myArr[i].due);

        if (isThisWeek(todoDate) == true) {
            const todoWeek = document.createElement("div");
            todoWeek.innerHTML = `
            <div>
                ${DOM.myArr[i].title} ${DOM.myArr[i].due} ${DOM.myArr[i].note}
            </div>
            `;
            document.querySelector('.week-container').appendChild(todoWeek);
        }
        if (isToday(todoDate) == true) {
            const todoToday = document.createElement("div");
            todoToday.innerHTML += `
            <div>
                ${DOM.myArr[i].title} ${DOM.myArr[i].due} ${DOM.myArr[i].note}
            </div>
            `;
            document.querySelector('.today-container').appendChild(todoToday);
        }  
    // }
}



export default page;
export {UpcomingTodos};