export function sidebarLength(length) {
    document.querySelector('.side-bar').style.width = `${length}px`;
    document.querySelector('.main').style.marginLeft = `${length}px`;
}

export function displayInboxPage() {
    document.querySelector('.main-title').innerHTML = 'Inbox';
    document.querySelector('.task-container').style.display = "block";
    document.querySelector('.week-container').style.display = "none";
    document.querySelector('.today-container').style.display = "none";
}

export function displayWeekPage() {
    document.querySelector('.main-title').innerHTML = 'Week';
    document.querySelector('.week-container').style.display = "block";
    document.querySelector('.today-container').style.display = "none";
    document.querySelector('.task-container').style.display = "none";
}

export function displayTodayPage() {
    document.querySelector('.main-title').innerHTML = 'Today';
    document.querySelector('.today-container').style.display = "block";
    document.querySelector('.task-container').style.display = "none";
    document.querySelector('.week-container').style.display = "none";
}
