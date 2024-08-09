document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    const clearButton = document.getElementById('clear');
    const equalsButton = document.getElementById('equals');

    let currentInput = '';
    let previousInput = '';
    let operator = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.getAttribute('data-value');

            if (!isNaN(value) || value === '.') {
                currentInput += value;
                updateDisplay(currentInput);
            } else if (value === '/' || value === '*' || value === '-' || value === '+') {
                if (currentInput !== '') {
                    previousInput = currentInput;
                    currentInput = '';
                    operator = value;
                    updateDisplay(operator);
                }
            }
        });
    });

    clearButton.addEventListener('click', function() {
        currentInput = '';
        previousInput = '';
        operator = '';
        updateDisplay('0');
    });

    equalsButton.addEventListener('click', function() {
        if (currentInput !== '' && previousInput !== '' && operator !== '') {
            const result = evaluate(previousInput, currentInput, operator);
            updateDisplay(result);
            currentInput = result;
            previousInput = '';
            operator = '';
        }
    });

    function evaluate(a, b, operator) {
        a = parseFloat(a);
        b = parseFloat(b);

        switch (operator) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b;
            default:
                return 0;
        }
    }

    function updateDisplay(value) {
        display.textContent = value;
    }
});
