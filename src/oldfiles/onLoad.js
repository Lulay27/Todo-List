// import { weekContainer, todayContainer } from "../view/domConstants";


// for these maybe add them to template.html? so I dont have to
// qselect them inside my controller.js
export function onLoad() {
    const week = document.createElement("div");
    week.style.display = 'none';
    week.className = "week-container";
    document.querySelector('.main-container').appendChild(week);

    const day = document.createElement("div");
    day.style.display = 'none';
    day.className = "today-container";
    document.querySelector('.main-container').appendChild(day);

    const popup = document.createElement("div");
    popup.style.display ='none';
    popup.className = 'popup-background';
    document.querySelector('.container').appendChild(popup);
}