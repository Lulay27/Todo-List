import _, { difference } from 'lodash';
import './styles/style.css';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import DOM from './DOM.js';
import Todo from './todotester.js';
import { dom } from '@fortawesome/fontawesome-svg-core';
import page from './page.js';
import {render} from './todotester.js';
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

// problem with duplicates if I were to change date to same date
// soln?
// delete old display when creating new one inside forloop

// inThisWeek set option to sunday as first day in week

// checkmark-btns should be where display for week/today is updated

// soln to linking inbox with today/week
// have all 3 pages source the myArr
// when deleting obj need to use splice
// on check-mark-btn press update all 3 pages ---> activate method
// on update() can ether have 3 diff updates or single one
// but for each of the 3 methods delete old display
// and create the new display and append !!!!

// model view controllers

// view webpages and clicking 

// model database, data etc 
    
// controller middle man

// FUNCTIONS TO MAKE TO REDUCE MESSY CODE
//

render();   // only here for the hard coded object I coded for testing
onLoad();