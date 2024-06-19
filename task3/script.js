// script.js
document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = Array.from(document.querySelectorAll('.btn'));
    let oper = '';
    let curr = '';
    let prev = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (button.id === 'clear') {
                curr = '';
                prev = '';
                oper = '';
                display.textContent = '0';
                return;
            }

            if (button.id === 'equals') {
                if (curr&& prev && oper) {
                    curr = eval(`${prev}${oper}${curr}`);
                    display.textContent = curr;
                    prev = '';
                    oper = '';
                }
                return;
            }

            if (button.classList.contains('operator')) {
                if (curr && oper) {
                    prev = eval(`${prev}${oper}${curr}`);
                    curr = '';
                } else if (curr) {
                    prev = curr;
                    curr = '';
                }
               
                oper = value;
                display.textContent=oper;
                return;
            }
            
            curr += value;
            display.textContent = curr;
        });
    });
});
