
function makeHeader() {
    const body = document.querySelector('body');
    const header = document.createElement('header');
    body.appendChild(header);
}

function makeMain() {
    const body = document.querySelector('body');
    const main = document.createElement('main');
    body.appendChild(main);
}

function makeFooter() {
    const body = document.querySelector('body');
    const footer = document.createElement('footer');
    body.appendChild(footer);
}

function start() {
    makeHeader();
    makeMain();
    makeFooter();
}

export  { start }; 