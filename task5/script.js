// При вводе текста в поле ввода (input) текст должен дублироваться в текст. блок с id duplicatefield
// При нажатии кнопки вывести текст в консоль и удалить из формы текст, написанный в input должен быть выведен в консоли, а поле ввода и duplicateFied должны быть очищены

const inputField = document.querySelector('input');
const duplicateField = document.querySelector('#duplicateField');
const submitButton = document.querySelector('button');

inputField.addEventListener('input', (event) => {
    const inputText = inputField.value;
    duplicateField.textContent = inputText;
})

submitButton.addEventListener('click', (event) => {
    const inputText = inputField.value;
    console.log(inputText);
    duplicateField.textContent = '';
    inputField.value = '';
})
