// import { weekContainer, todayContainer } from "../view/domConstants";
export function onLoad() {
    const week = document.createElement("div");
    week.style.display = 'none';
    week.className = "week-container";
    document.querySelector('.main-container').appendChild(week);

    const day = document.createElement("div");
    day.style.display = 'none';
    day.className = "today-container";
    document.querySelector('.main-container').appendChild(day);
}