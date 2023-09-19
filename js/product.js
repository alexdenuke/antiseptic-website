// Выбираем все кнопки
const buttons = document.querySelectorAll('.product__bottom-btn');

// Выбираем все блоки информации
const infoBlocks = document.querySelectorAll('.product__bottom-info');

buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        // Убираем активный класс со всех кнопок
        buttons.forEach(button => {
            button.classList.remove('product__bottom-btn--active');
        });

        // Убираем активный класс со всех блоков информации
        infoBlocks.forEach(block => {
            block.classList.remove('product__bottom-info--active');
        });

        // Добавляем активный класс текущей кнопке
        btn.classList.add('product__bottom-btn--active');

        // Добавляем активный класс соответствующему блоку информации
        infoBlocks[index].classList.add('product__bottom-info--active');
    });
});






