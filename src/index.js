import './styles/style.css';
import {EventListeners} from './controller/controller.js';
import {onLoad} from './oldfiles/onLoad.js';
import { displayTodoArray } from './view/displayTodo.js';

onLoad();
EventListeners();
displayTodoArray();

// change some functions to take in a Todo object as parameter
// instead of just using the ID tag
// my code is mostly DOM events to process objects need more oop
// ex. after getting ID of todo create a pointer todo that is referenced
