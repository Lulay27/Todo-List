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

// fix spacing of css work on css !! learn sass
// centering of To-Do List title a bit off fix
// make event listener where click anywhere but sidebar to close it
// DOM.js a bit messy.. do I want to have my array in there? clean up (e)