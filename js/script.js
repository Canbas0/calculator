const allButtons = document.querySelectorAll('.btn');
const inputText = document.querySelector('#text');

allAddClickEvent();

function allAddClickEvent() {
    allButtons.forEach((btn) => {
        if (btn.value !== 'DE' && btn.value !== 'AC' && btn.value !== '=') {
            btn.addEventListener('click', () => {
                inputText.value += btn.value
            });
        } else {
            if (btn.value === '=') {
                btn.addEventListener('click', () => {
                    inputText.value = eval(inputText.value);
                });
            } else {
                if (btn.value === 'DE') {
                    btn.addEventListener('click', () => {
                        inputText.value = inputText.value.slice(0, -1)
                    });
                } else {
                    btn.addEventListener('click', () => {
                        inputText.value = '';
                    });
                };
            };
        };
    });
};
