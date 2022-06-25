import _, { difference } from 'lodash';
import './styles/style.css';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import DOM from './DOM.js';
import Todo from './todo.js';
import { dom } from '@fortawesome/fontawesome-svg-core';
import page from './page.js';
import {render} from './todo.js';

// problem with todo svg onclicks not working need to click few times
// later on todo title click change the title name of todo
// going to need to extract date data for other sidebar tabs
// change side bar today icon to something not a star

render();
