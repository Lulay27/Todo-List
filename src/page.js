import DOM from "./DOM";
import {isThisWeek, parseISO} from 'date-fns';

const page = (name) => {
    document.querySelector('.main-title').innerHTML = name;
    let todoToday;
    for (let i = 0; i < DOM.myArr.length; i++) {
        if (name == "Week") {
            document.querySelector('.main-container').style.display = "none";
            const todoDate = parseISO(DOM.myArr[i].due);
            if (isThisWeek(todoDate) == true) {
                todoToday = document.createElement("div");
                todoToday.className = "week-container";
                todoToday.innerHTML += `
                <div>
                    ${DOM.myArr[i].title} ${DOM.myArr[i].due} ${DOM.myArr[i].note}
                </div>
                `;
            }
        }
    }
    document.querySelector('.main').appendChild(todoToday);
};

// converts obj date into single number to compare to mm ex. '0','5' returns '5'
function weekCon(digit1,digit2) {
    if (digit1 == '0') {
        return digit2;
    }
    return digit1 + "" + digit2 ;
}

export default page;