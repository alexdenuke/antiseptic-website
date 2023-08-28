



function adjustContentPadding() {
    const header = document.querySelector('.header');
const sectionBelowHeader = header.nextElementSibling;

const headerHeight = header.offsetHeight;
sectionBelowHeader.style.marginTop = `${headerHeight}px`;
}

window.onload = adjustContentPadding;
window.onresize = adjustContentPadding;