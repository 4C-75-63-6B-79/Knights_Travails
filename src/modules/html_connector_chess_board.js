import { setStart, setDestination, findPath, unInitialize } from './chess_board.js';
import { updateButtonStyle, updateChessBoardBoxClassStart, updateChessBoardBoxClassEnd } from './html_elements.js';
const htmlConnectToChessBoard = (function() {

    let toggleKnightPlacement = false, toggleSelectDestination = false;

    const knightPlacement = function(coord) {
        if(toggleKnightPlacement === true && Array.isArray(coord)) {
            updateChessBoardBoxClassStart(coord[0] + '' + coord[1]);
            setStart(coord);
            toggleKnightPlacement = false;
            updateButtonStyle();
        } else if(toggleKnightPlacement === false && !Array.isArray(coord)) {
            toggleKnightPlacement = true;
            toggleSelectDestination = false;
        }
    }

    const randomKnightPlacement = function() {
        updateButtonStyle();
        const [x, y] = [ Math.floor(Math.random() * 8), Math.floor(Math.random() * 8) ];
        updateChessBoardBoxClassStart(x + '' + y);
        setStart([x, y]);
    }

    const selectDestination = function(coord) {
        if(toggleSelectDestination === true && Array.isArray(coord)) {
            updateChessBoardBoxClassEnd(coord[0] + '' + coord[1]);
            setDestination(coord);
            toggleSelectDestination = false;
            updateButtonStyle();
        } else if(toggleSelectDestination === false && !Array.isArray(coord)) {
            toggleSelectDestination = true;
            toggleKnightPlacement = false;
        }
    }

    const travails = function() {
        updateButtonStyle();
        console.log(findPath());
    }

    const clearBoard = function() {
        toggleSelectDestination = false;
        toggleKnightPlacement = false;
        updateButtonStyle();
        unInitialize();
    }

    return {
        knightPlacement,
        randomKnightPlacement,
        selectDestination,
        travails,
        clearBoard,
    };
})();

const { knightPlacement: knightPlacement, 
        randomKnightPlacement: randomKnightPlacement, 
        selectDestination: selectDestination,
        travails: travails,
        clearBoard: clearBoard } = htmlConnectToChessBoard;

export { knightPlacement, randomKnightPlacement, selectDestination, travails, clearBoard };