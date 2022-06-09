import _, { difference } from 'lodash';
import './styles/style.css';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import DOM from './DOM.js';



// library.add(faMeteor);
// dom.watch();

// import Icon from './components/menu.png';

const menuBtn = document.querySelector('.menu-btn');
const nonMenu = document.querySelector('.main');
// const notSide = document.querySelectorAll('body :not(.side-bar');
const sideBar = document.querySelector('.side-bar');

menuBtn.addEventListener('click',render);
nonMenu.addEventListener('click',renderOff);


function render(e) {
    // if (e.target.className = 'fa fa-bars') {
        document.querySelector('.side-bar').style.width = '200px';
    // }
}

function renderOff(e) {
    // if (!sideBar.contains(e.target)) {
        document.querySelector('.side-bar').style.width = '0px';
    // }
}

const main = document.querySelector('.main');




 