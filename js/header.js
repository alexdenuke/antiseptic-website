function adjustContentPadding() {
    const header = document.querySelector('.header');
    const sectionBelowHeader = header.nextElementSibling;
    const headerHeight = header.offsetHeight;


    let adjustedHeaderHeight = headerHeight;


    if (window.location.pathname === '/' || window.location.pathname === '/index.html' ) {
        adjustedHeaderHeight += 0;  
    } else if (adjustedHeaderHeight += 70) {
    }

    sectionBelowHeader.style.marginTop = `${adjustedHeaderHeight}px`;
}

window.onload = adjustContentPadding;
window.onresize = adjustContentPadding;
