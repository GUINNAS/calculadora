// Seleciona o display e o botão "C"
const display = document.getElementById('display');
const btnClear = document.getElementById('btn-clear');
const numberButtons = document.querySelectorAll('.btn:not(.operator)');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.getElementById('equals');


// Adiciona um evento de clique ao botão "C"
btnClear.addEventListener('click', () => {
    display.textContent = '0'; // Reseta o display para 0
});

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Limita o display a 10 caracteres
        if (display.textContent.length < 10) {
            if (display.textContent === '0') {
                display.textContent = button.textContent;
            } else {
                display.textContent += button.textContent;
            }
        }
    });
});

