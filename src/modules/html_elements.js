import { knightPlacement, randomKnightPlacement, selectDestination, travails, reset } from './html_connector_chess_board.js';

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

function makeDiv({id, classNames, textContent, title, dataAttributeName, dataAttributeValue, callBackFunction}) {
    const div = document.createElement('div');
    id ? div.setAttribute('id', id) : 'doNothing';
    classNames ? classNames.split(' ').forEach(eleClass => div.classList.add(eleClass)) : 'doNothing';
    textContent ? div.textContent = textContent : 'doNothing';
    title ? div.setAttribute('title', title) : 'doNothing';
    dataAttributeName ? div.setAttribute(`data-${dataAttributeName}`, '') : 'doNothing';
    dataAttributeValue && dataAttributeName ? div.setAttribute(`data-${dataAttributeName}`, dataAttributeValue) : 'doNothing';
    callBackFunction ? div.addEventListener('click', callBackFunction) : 'doNothing';
    return div;
}

function makeButton({id, classNames, textContent, title, callBackFunction}) {
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    id ? button.setAttribute('id', id) : 'doNothing';
    classNames ? classNames.split(' ').forEach(eleClass => button.classList.add(eleClass)) : 'doNothing';
    textContent ? button.textContent = textContent : 'do Nothing';
    title ? button.setAttribute('title', title) : 'doNothing';
    callBackFunction ? callBackFunction.forEach(eleFunction => button.addEventListener('click', eleFunction)) : 'doNothing';
    return button;
}

function makeTitleDiv() {
    const header = document.querySelector('header');
    const titleDiv = makeDiv({id: 'title', title: 'Knight Travails', textContent: 'Knight Travails'});
    header.appendChild(titleDiv);
}

function makeControlsDiv() {
    const main = document.querySelector('main');
    const controlDiv = makeDiv({id: 'controls'});
    main.appendChild(controlDiv);
}

function makeControlButton() {
    const controlDiv = document.getElementById('controls');
    controlDiv.appendChild(makeButton({id: 'placeKnight', title: 'Place Knight Button', textContent: 'Place Knight', callBackFunction: [knightPlacement, updateButtonStyle]}));
    controlDiv.appendChild(makeButton({id: 'randomlyPlaceKnight', title: 'Randomly Place Knight Button', textContent: 'Randomly Place Knight', callBackFunction: [randomKnightPlacement]}));
    controlDiv.appendChild(makeButton({id: 'selectDestination', title: 'Select Destination Button', textContent: 'Select Destination', callBackFunction: [selectDestination, updateButtonStyle]}));
    controlDiv.appendChild(makeButton({id: 'startTravails', title: 'Start Travails Button', textContent: 'Start Travails', callBackFunction: [travails]}));
    controlDiv.appendChild(makeButton({id: 'clearBoard', title: 'Clear Board Button', textContent: 'Clear Board', callBackFunction: [reset, clearPath]}));
}

function updateButtonStyle(event) {
    const buttonWithOnPosition = document.querySelector('.onPosition');
    if(event) {
        buttonWithOnPosition ? buttonWithOnPosition.classList.remove('onPosition') : 'doNothing';
        event.target.classList.add('onPosition');
    } else {
        buttonWithOnPosition ? buttonWithOnPosition.classList.remove('onPosition') : 'doNothing';
    }
}

function makeChessBoardDiv() {
    const main = document.querySelector('main');
    const chessBoardDiv = makeDiv({id: 'chessBoard'});
    main.appendChild(chessBoardDiv);
}

function chessBoardBoxClicked(event) {
    const x = Number(event.target.getAttribute('data-coordinates').charAt(0));
    const y = Number(event.target.getAttribute('data-coordinates').charAt(1));
    knightPlacement([x, y]);
    selectDestination([x, y]);
}

function makeChessBoardBoxDiv() {
    const chessBoardDiv = document.getElementById('chessBoard');
    for(let i=0; i<8; i++) {
        for(let j=0; j<8; j++) {
            chessBoardDiv.appendChild(makeDiv({
                id: `box${j+1}${Math.abs(8-i)}`, 
                classNames: `box ${(j + Math.abs(7-i)) % 2 === 0 ? 'black' : 'white'}`, 
                textContent: `${j+1}${Math.abs(8-i)}`,  
                title: `Box ${String.fromCharCode(64 + Math.abs(j+1))}${8-i}`,
                dataAttributeName: 'coordinates',
                dataAttributeValue: `${j}${Math.abs(7-i)}`,
                callBackFunction: chessBoardBoxClicked,
            }));
        }
    }
}

function updateChessBoardBoxClassStart(boxAttribute) {
    const boxWithClassStart = document.querySelector(`.box.start`);
    boxWithClassStart ? boxWithClassStart.classList.remove('start') : 'doNothing' ;
    const box = document.querySelector(` div.box[data-coordinates = '${boxAttribute}']`);
    box ? box.classList.add('start') : 'doNothing';
}

function updateChessBoardBoxClassEnd(boxAttribute) {
    const boxWithClassEnd = document.querySelector(`.box.end`);
    boxWithClassEnd ? boxWithClassEnd.classList.remove('end') : 'doNothing' ;
    const box = document.querySelector(` div.box[data-coordinates = '${boxAttribute}']`);
    box ? box.classList.add('end') : 'doNothing';
}

function clearPath() {
    // const boxWithClassStart = document.querySelector(`.box.start`);
    // boxWithClassStart ? boxWithClassStart.classList.remove('start') : 'doNothing' ;
    // const boxWithClassEnd = document.querySelector(`.box.end`);
    // boxWithClassEnd ? boxWithClassEnd.classList.remove('end') : 'doNothing' ;
    const boxexWithClassPath = document.querySelectorAll('.box.path');
    boxexWithClassPath ? Array.from(boxexWithClassPath).forEach(box => box.classList.remove('path')): 'doNothing';
}

function start() {
    makeHeader();
    makeMain();
    makeFooter();
    makeTitleDiv();
    makeControlsDiv();
    makeChessBoardDiv();
    makeControlButton();
    makeChessBoardBoxDiv();
}

export  { start, updateButtonStyle, updateChessBoardBoxClassStart, updateChessBoardBoxClassEnd, clearPath }; 