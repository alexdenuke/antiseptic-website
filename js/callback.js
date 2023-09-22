const btn = document.querySelector('.callback__btn');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');

btn.addEventListener('click', () => {
    modal.style.display = 'block'; // Добавлено
    setTimeout(() => {
        modal.style.opacity = '1'; // Изменено
    }, 10); // Добавлено
});

modalClose.addEventListener('click', () => {
    modal.style.opacity = '0'; // Изменено
    setTimeout(() => {
        modal.style.display = 'none'; // Добавлено
    }, 300); // Добавлено
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.opacity = '0'; // Изменено
        setTimeout(() => {
            modal.style.display = 'none'; // Добавлено
        }, 300); // Добавлено
    }
});

