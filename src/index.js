// import _, { difference } from 'lodash';
import './styles/style.css';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
// import { dom } from '@fortawesome/fontawesome-svg-core';
// remove all this TRASH FORTAWESOME ICONS SO BAD !!!

//old files

// import DOM from './oldfiles/DOM.js';
// import Todo from './oldfiles/todotester.js';

// import page from './oldfiles/page.js';
// import {render} from './oldfiles/todotester.js';        //USED
// import {UpcomingTodos} from './oldfiles/page.js';
// import {onLoad} from './oldfiles/onLoad.js';            //USED


// new files
import {EventListeners} from './controller/controller.js';
import {onLoad} from './oldfiles/onLoad.js';
onLoad();   // just add this to html all it is is loading html lol
EventListeners();

//TASK 1
// fix up side bar use grid and completely redo it with img as btns
// same with menu btn
// after implement projects...make todo class have project?
// or create project class
// also change the FONT lol

//TASK 2
// make week/today look same and FUNCTION same as inbox minus adding todos
// configure how date looks day/mm/year ? idk

// added onLoad for now just to add today/week containers will change later
// maybe add those into event Listeners?
// also problem in domConstatants selectors week/todayContainer
// both get invoked prior to onLoad(); thus i have to manually
// qselect both containers to grab em instead of importing from domContants.js

// priority idea have 3 levels low med high switch by clicking on star
// for UI colors green yellow red for levels which will be highlighted
// everytime user presses star inc from g -> y -> r cycling

/*
change side bar today icon to something not a star

inThisWeek set option to sunday as first day in week

model view controllers

view webpages and clicking 

model database, data etc 
    
controller middle man

work on how pages displayed --> 
*/