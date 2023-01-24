
function makeHeader() {
    const body = document.querySelector('body');
    const header = document.createElement('header');
    body.appendChild(header);
}

function start() {
    makeHeader();
}

export  {start }; 