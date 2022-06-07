import _ from 'lodash';
import './styles/style.css';
// import Icon from './components/menu.png';

const menuBtn = document.querySelector('.menu-btn');
const nonMenu = document.querySelector('.main');
// const notSide = document.querySelectorAll('body :not(.side-bar');
const sideBar = document.querySelector('.side-bar');

menuBtn.addEventListener('click',render);
nonMenu.addEventListener('click',renderOff);

let num = 0;

function render(e) {
    if (e.target.className = 'menu-png'){
        document.querySelector('.side-bar').style.width = '200px';
        num = 1;
    }
}

function renderOff(e) {
    // if (!sideBar.contains(e.target)) {
        document.querySelector('.side-bar').style.width = '0px';
    // }
}




 