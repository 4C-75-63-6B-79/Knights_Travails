
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

function makeDiv({id, classNames, textContent, title, dataAttributeName, dataAttributeValue}) {
    const div = document.createElement('div');
    id ? div.setAttribute('id', id) : 'doNothing';
    classNames ? classNames.split(' ').forEach(ele => div.classList.add(ele)) : 'doNothing';
    textContent ? div.textContent = textContent : 'doNothing';
    title ? div.setAttribute('title', title) : 'doNothing';
    dataAttributeName ? div.setAttribute(`data-${dataAttributeName}`, '') : 'doNothing';
    dataAttributeValue && dataAttributeName ? div.setAttribute(`data-${dataAttributeName}`, dataAttributeValue) : 'doNothing';
    return div;
}

function start() {
    makeHeader();
    makeMain();
    makeFooter();
}

export  { start }; 