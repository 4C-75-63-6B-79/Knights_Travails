
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

function makeButton({id, classNames, textContent, title}) {
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    id ? button.setAttribute('id', id) : 'doNothing';
    classNames ? classNames.split(' ').forEach(ele => button.classList.add(ele)) : 'doNothing';
    textContent ? button.textContent = textContent : 'do Nothing';
    title ? button.setAttribute('title', title) : 'doNothing';
}

function makeTitleDiv() {
    const header = document.querySelector('header');
    const titleDiv = makeDiv({id: 'title', title: 'Knight Taravils', textContent: 'Knight Taravils'});
    header.appendChild(titleDiv);
}

function makeControlsDiv() {
    const main = document.querySelector('main');
    const controlDiv = make({id: 'contorls'});
    main.appendChild(controlDiv);
}

function makeControlButton() {
    const controlDiv = document.getElementById('contorls');
    controlDiv.appendChild(makeButton({id: 'placeKnight', title: 'Place Knight Button', textContent: 'Place Knight'}));
    controlDiv.appendChild(makeButton({id: 'randomlyPlaceKnight', title: 'Randomly Place Knight Button', textContent: 'Randomly Place Knight'}));
    controlDiv.appendChild(makeButton({id: 'selectDestination', title: 'Select Destination Button', textContent: 'Select Destination'}));
    controlDiv.appendChild(makeButton({id: 'startTravails', title: 'Start Travails Button', textContent: 'Start Travails'}));
    controlDiv.appendChild(makeButton({id: 'clearBoard', title: 'Clear Board Button', textContent: 'Clear Board'}));
}

function makeChessBoardDiv() {
    const main = document.querySelector('main');
    const chessBoardDiv = make({id: 'chessBoard'});
    main.appendChild(chessBoardDiv);
}

function start() {
    makeHeader();
    makeMain();
    makeFooter();
    makeTitleDiv();
    makeControlsDiv();
    makeChessBoardDiv();
}

export  { start }; 