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

    const popup = document.createElement("div");
    popup.style.display ='none';
    popup.className = 'popup-background';
    // popup.innerHTML = `
    // <div class="popup-container">
    //     <div class="popup-title test">Cleaning Dishes </div>
    //     <div class="popup-due test">Due: </div>
    //     <div class="popup-notes test">Notes: </div>
    //     <img class="popup-exit " src="${reject}">
    // </div>
    // `;
    document.querySelector('.container').appendChild(popup);
}