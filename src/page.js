import DOM from "./DOM";
import {isThisWeek, parseISO, isToday} from 'date-fns';

const page = (name) => {
    document.querySelector('.main-title').innerHTML = name;
    
};

function UpcomingTodos() {  // creates today and week pages
    // let todoToday;
     let todoWeek;

    

    // const todoToday = document.createElement("div");
    // todoToday.style.display = 'none';
    // todoToday.className = "today-container";
    // document.querySelector('.main-container').appendChild(todoToday);


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

        // else if (isToday(todoDate) == true) {
        //     todoToday.innerHTML += `
        //     <div>
        //         ${DOM.myArr[i].title} ${DOM.myArr[i].due} ${DOM.myArr[i].note}
        //     </div>
        //     `;
        //     // document.querySelector('.main-container').appendChild(todoToday);
        // }        
    } document.querySelector('.week-container').appendChild(todoWeek);
}



export default page;
export {UpcomingTodos};