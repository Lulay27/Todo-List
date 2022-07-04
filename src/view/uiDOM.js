export function sidebarLength(length) {
    document.querySelector('.side-bar').style.width = `${length}px`;
    document.querySelector('.main').style.marginLeft = `${length}px`;
}
