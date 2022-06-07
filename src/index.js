import _ from 'lodash';
import './styles/style.css';
// import Icon from './components/menu.png';

const menuBtn = document.querySelector('.menu-btn');
const nonMenu = document.querySelector('.main');
const notSide = document.querySelectorAll('body :not(.side-bar');

menuBtn.addEventListener('click',render);
nonMenu.addEventListener('click',renderOff);

function render(e) {

    // console.log (e.target.className);
    console.log(e.target);

    // if (e.target.className = 'menu-png' ) {
        document.querySelector('.side-bar').style.width = '200px';
    // }
    // if (e.target.id = 'mainId' ) {
    //     document.querySelector('.side-bar').style.width = '0px';
    // }

    // problem both these if statments firing make seperate event functions?
    // whats more practical? Also need to add e listener for if clicked on header/footer
    // or make something if clicked != sidebar more efficient
    

}

function renderOff(e) {
    if (e.target.id != '.side-bar' ) {
        document.querySelector('.side-bar').style.width = '0px';
    }
}




 