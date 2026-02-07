// taskContainer variable declared in script.js (line 2)
const todoForm = document.getElementById("todo-form");

function syncFormWidth() {
    const rect = taskContainer.getBoundingClientRect();

    // get computed padding-left
    const style = window.getComputedStyle(taskContainer);
    const paddingLeft = parseFloat(style.paddingLeft);

    // set width minus padding
    const width = rect.width - paddingLeft * 2; // both left + right padding
    
    todoForm.style.width = width + "px";
    
    // set left position accounting for padding
    todoForm.style.left = rect.left + paddingLeft + "px"; // align it horizintally
}

syncFormWidth();
window.addEventListener("resize", syncFormWidth);