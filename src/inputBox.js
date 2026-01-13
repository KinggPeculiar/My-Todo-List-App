// inputBox variable declared in script.js (line 1)

const defaultPlaceholder = "Add a task";
const activePlaceholder = "What's on your agenda?"

inputBox.placeholder = defaultPlaceholder;

inputBox.addEventListener("focus", () => {
    if(inputBox.value === "") {
        inputBox.placeholder = activePlaceholder;
    }
});

inputBox.addEventListener("blur", () => {
    if (inputBox.value === "") {
        inputBox.placeholder = defaultPlaceholder;
    }
});