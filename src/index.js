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
import {UpcomingTodos} from './page.js';
import {onLoad} from './onLoad.js';

// problem with todo svg onclicks not working need to click few times
// later on todo title click change the title name of todo

// change side bar today icon to something not a star

// make it so when u change date twice old one is saved in there?

// today and week will be same but diff is today/week lol
// display (ui interaction only in inbox/project)
// displays in boxes? the todos similar to library display?
// projects added to sidebar
// clicking on each projects opens up ui similar to today week
// but for projects

render();   // only here for the hard coded object I coded for testing
onLoad();