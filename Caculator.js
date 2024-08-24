const display = document.getElementById('display');
const buttons = Array.from(document.querySelectorAll('.btn'));

let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === 'C') {
            // Clear the display
            currentInput = '';
            previousInput = '';
            operator = '';
            display.value = '';
        } else if (button.textContent === '=') {
            // Calculate the result
            try {
                display.value = eval(currentInput);
                previousInput = display.value;
                currentInput = display.value;
            } catch {
                display.value = 'Error';
                currentInput = '';
                previousInput = '';
                operator = '';
            }
        } else {
            // Handle numbers and operators
            if (['/', '*', '-', '+'].includes(button.textContent)) {
                if (currentInput !== '' && operator === '') {
                    operator = button.textContent;
                    currentInput += ` ${operator} `;
                } else if (currentInput !== '' && operator !== '') {
                    currentInput = currentInput.slice(0, -3);
                    operator = button.textContent;
                    currentInput += ` ${operator} `;
                }
            } else {
                currentInput += button.textContent;
            }
            display.value = currentInput;
        }
    });
});
