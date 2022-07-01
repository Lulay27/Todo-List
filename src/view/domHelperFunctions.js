
// creates element with tag type and class name
function createElement(tag,className) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);

    return element;
}

// only use inside when element hasnt been created yet b/c im using constants already created
// gets element with class or id
function getElement(selector) {
    return element = document.querySelector(selector);
    // return element;
}

