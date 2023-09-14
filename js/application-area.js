let buttons = document.querySelectorAll('.application-area__read-more');
let hiddenLink = document.querySelectorAll('.hidden-link');
let wrap = document.querySelector('.application-area__hidden-wrap');
let count = hiddenLink.length;

console.log(count);


buttons.forEach(button => {
    let parent = button.closest('.application-area__item');
    let hiddenLinks = parent.querySelectorAll('.hidden-link');
    let wrap = parent.querySelector('.application-area__hidden-wrap');
    let count = hiddenLinks.length;

    button.addEventListener('click', () => {
        if (wrap.style.maxHeight && wrap.style.maxHeight !== '0px') {
            wrap.style.maxHeight = '0px';
            button.textContent = `+ Еще ${count}`;
        } else {
            wrap.style.maxHeight = wrap.scrollHeight + 'px';
            button.textContent = `- Скрыть`;
        }
    });
});
