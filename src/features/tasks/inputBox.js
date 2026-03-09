export function inputBox() {
    const inputField = document.querySelector(".input-box");

    const defaultPlaceholder = "Add a task";
    const activePlaceholder = "What's on your agenda?"

    inputField.placeholder = defaultPlaceholder;

    inputField.addEventListener("focus", () => {
        if(inputField.value === "") {
            inputField.placeholder = activePlaceholder;
        }
    });

    inputField.addEventListener("blur", () => {
        if (inputField.value === "") {
            inputField.placeholder = defaultPlaceholder;
        }
    });    
}