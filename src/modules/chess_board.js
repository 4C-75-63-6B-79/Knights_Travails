import ChessBoxNode from "./chess_box_node.js";

const chessBoard = (function() {
    const dx = [-2, -1, 1, 2, -2, -1, 1, 2];
    const dy = [-1, -2, -2, -1, 1, 2, 2, 1];
    let start, destination, queue, visited;

    const placeKnight = function(startCoord) {
        start = new ChessBoxNode(startCoord[0], startCoord[1], 0, null);
    }

    const setDestination  = function(destCoord) {
        destination = new ChessBoxNode(destCoord[0], destCoord[1]);
    }

    const initialize = function() {
        queue = [start];
        visited = Array.from({length: 8}, () => Array.from({length: 8}, () => false)); // use this to understand if need in future https://stackoverflow.com/questions/4852017/how-to-initialize-an-arrays-length-in-javascript
        visited[start.x][start.y] = true;
    }

    const unInitialize = function() {
        start = null;
        destination = null;
        queue = null;
        visited = null;
    }

    const findPath = function() {
        if(!start && !destination && !queue) return;
        initialize();
        while(queue.length > 0) {
            const firstQueueNode = queue.shift();
            if(firstQueueNode.equals(destination)) {
                return firstQueueNode;
            }
            for(let i=0; i<8; i++) {
                const newNode = new ChessBoxNode(firstQueueNode.x+dx[i], firstQueueNode.y+dy[i], null, firstQueueNode);
                if(newNode.onBoard() && !visited[newNode.x][newNode.y]) {
                    visited[newNode.x][newNode.y] = true;
                    newNode.moves = firstQueueNode.moves + 1;
                    queue.push(newNode);
                }
            }
        }
        return -1;
    }

    return{
        placeKnight,
        setDestination,
        findPath,
        unInitialize
    }
})();

const {placeKnight: placeKnight, setDestination: setDestination, findPath: findPath, unInitialize: unInitialize} = chessBoard;
export {placeKnight, setDestination, findPath, unInitialize};