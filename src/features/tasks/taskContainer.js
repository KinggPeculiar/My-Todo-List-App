export function taskContainer() {
    const inputField = document.querySelector(".input-box");
    const taskBox = document.querySelector(".task-container");

    function addTask() {
        if(inputField.value === "") {
            inputField.focus(); // keep cursour in the input
            return; // stop the function here
        }

        let li = document.createElement("li");
        li.textContent = inputField.value;
        taskBox.appendChild(li);

        let span = document.createElement("span");
        span.textContent = "\u00d7";
        li.appendChild(span);

        inputField.value = "";
    }

    inputField.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            if (inputField.value === "") {
                e.preventDefault(); // prevent form submit / blur
                inputField.focus(); // keep cursor
            } else {
                addTask(); // valid input = add task
                e.preventDefault(); //stop page refresh
            }
        }
    });


    taskBox.addEventListener("click", function(e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
        }else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
        }
    }, false);    
}