import ChessBoxNode from "./chess_box_node.js";

const chessBoard = (function() {
    const dx = [-2, -1, 1, 2, -2, -1, 1, 2];
    const dy = [-1, -2, -2, -1, 1, 2, 2, 1];
    let start, destination, queue, visited;

    const setStart = function(startCoord) {
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
                return getPath(firstQueueNode);
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

    function getPath(destChessBoxNode) {
        const moveEndPoints = getMoveEndPoints(destChessBoxNode);
        const pathCoordinates = [moveEndPoints[0]];
        let start, end;
        for(let i=0; i<moveEndPoints.length-1; i++) {
            start = moveEndPoints[i];
            end = moveEndPoints[i+1];
            if(isXmoreThanY()) {
                moveX(2);
                moveY(1);
            } else {
                moveY(2);
                moveX(1);
            }
        }
        // pathCoordinates.push(end);
        function isXmoreThanY() {
            return Math.abs(start[0] - end[0]) > Math.abs(start[1] - end[1]);
        }

        function moveX(numOfTimeToRun) {
            let startPlaceholder = start[0];
            let endPlaceholder = end[0];
            const incrementValue = (endPlaceholder - startPlaceholder) / Math.abs(endPlaceholder - startPlaceholder);
            while(numOfTimeToRun > 0) {
                pathCoordinates.push([pathCoordinates.slice(-1)[0][0] + incrementValue, pathCoordinates.slice(-1)[0][1]]);
                numOfTimeToRun -= 1;
            }
        }

        function moveY(numOfTimeToRun) {
            let startPlaceholder = start[1];
            let endPlaceholder = end[1];
            const incrementValue = (endPlaceholder - startPlaceholder) / Math.abs(endPlaceholder - startPlaceholder);
            while(numOfTimeToRun > 0) {
                pathCoordinates.push([pathCoordinates.slice(-1)[0][0], pathCoordinates.slice(-1)[0][1] + incrementValue]);
                numOfTimeToRun -= 1;
            }
        }
        return pathCoordinates;
    }

    function getMoveEndPoints(chessBoxNode) {
        let node = chessBoxNode;
        let pathCoordinates = [];
        while(node) {
            pathCoordinates.unshift([node.x, node.y]);
            node = node.parent;
        }
        return pathCoordinates;
    }

    return{
        setStart,
        setDestination,
        findPath,
        unInitialize
    }
})();

const {setStart: setStart, setDestination: setDestination, findPath: findPath, unInitialize: unInitialize} = chessBoard;
export {setStart, setDestination, findPath, unInitialize};