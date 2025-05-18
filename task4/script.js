// Должно появиться окно для ввода текста, при вводе текста в окно ввода в ссылке должен меняться текст не введенный

const link = document.querySelector('a');
link.addEventListener('click', (event) => {
    event.preventDefault();
    const userText = prompt('Введите текст');
    link.textContent = userText;
    console.log('Текст в ссылке изменён на ', userText);
})