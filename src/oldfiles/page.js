// import DOM from "./DOM";
import {isThisWeek, parseISO, isToday} from 'date-fns';

const page = (name) => {
    document.querySelector('.main-title').innerHTML = name;
    
};

function UpcomingTodos() {  // displays week and today pages controller
    const week = document.querySelector('.week-container');
    const today = document.querySelector('.today-container');
    week.innerHTML="";
    today.innerHTML="";
    for (let i = 0; i < DOM.myArr.length; i++) {
        const todoDate = parseISO(DOM.myArr[i].due);

        if (isThisWeek(todoDate) == true) {
            const todoWeek = document.createElement("div");
            todoWeek.innerHTML = `
            <div>
                ${DOM.myArr[i].title} ${DOM.myArr[i].due} ${DOM.myArr[i].note}
            </div>
            `;
            week.appendChild(todoWeek);
        }
        if (isToday(todoDate) == true) {
            const todoToday = document.createElement("div");
            todoToday.innerHTML += `
            <div>
                ${DOM.myArr[i].title} ${DOM.myArr[i].due} ${DOM.myArr[i].note}
            </div>
            `;
            today.appendChild(todoToday);
        }  
    }
}



export default page;
export {UpcomingTodos};