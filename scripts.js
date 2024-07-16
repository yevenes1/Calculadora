document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector("#display");
    const buttons = document.querySelectorAll("button");

    const evaluateExpression = () => {
        try {
            display.value = eval(display.value);
        } catch (e) {
            display.value = "Error";
        }
    };

    const clearDisplay = () => {
        display.value = "";
    };

    const deleteLastCharacter = () => {
        display.value = display.value.slice(0, -1);
    };

    const appendToDisplay = (value) => {
        display.value += value;
    };

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            switch (btn.id) {
                case "=":
                    evaluateExpression();
                    break;
                case "ac":
                    clearDisplay();
                    break;
                case "de":
                    deleteLastCharacter();
                    break;
                default:
                    appendToDisplay(btn.id);
                    break;
            }
        });
    });
});
