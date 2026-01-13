// inputBox variable declared in script.js (line 1)
// taskContainer variable declared in script.js (line 2)

function addTask() {
    if(inputBox.value === "") {
        inputBox.focus(); // keep cursour in the input
        return; // stop the function here
    }

    let li = document.createElement("li");
    li.textContent = inputBox.value;
    taskContainer.appendChild(li);

    let span = document.createElement("span");
    span.textContent = "\u00d7";
    li.appendChild(span);

    inputBox.value = "";
}

inputBox.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        if (inputBox.value === "") {
            e.preventDefault(); // prevent form submit / blur
            inputBox.focus(); // keep cursor
        } else {
            addTask(); // valid input = add task
            e.preventDefault(); //stop page refresh
        }
    }
});


taskContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);