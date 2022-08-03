// import _, { difference } from 'lodash';
import './styles/style.css';

// new files
import {EventListeners} from './controller/controller.js';
import {onLoad} from './oldfiles/onLoad.js';
import { displayTodoArray } from './view/displayTodo.js';

// retrieveLocalStorage();
onLoad();   // just add this to html all it is is loading html lol
EventListeners(); // this is technically the onLoad()
displayTodoArray();

// change some functions to take in a Todo object as parameter
// instead of just using the ID tag
// my code is mostly DOM events to process objects need more oop
// ex. after getting ID of todo create a pointer todo that is referenced
// 

// huge change that could save me code ********
// since I have today/week same as inbox (ui look)
// make it so onclick of today/week only changes title and 
// which todos are displayed.
// thus having all these obj in the same container (task-container)
// and removing todo-container and today-container


// since making inbox same as today/week diff is only shows
// today/week todos. Can maybe simplify displayTodo.js code into
// single displayTodo function
// problem is having multiple same IDS for obj name index

//TASK 2
// make week/today look same and FUNCTION same as inbox minus adding todos
// configure how date looks day/mm/year ? idk

// text cap in notes and maybe title?

// added onLoad for now just to add today/week containers will change later
// maybe add those into event Listeners?
// also problem in domConstatants selectors week/todayContainer
// both get invoked prior to onLoad(); thus i have to manually
// qselect both containers to grab em instead of importing from domContants.js

// priority idea have 3 levels low med high switch by clicking on star
// for UI colors green yellow red for levels which will be highlighted
// everytime user presses star inc from g -> y -> r cycling
