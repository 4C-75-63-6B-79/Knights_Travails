export default function ChessBoxNode(x, y, moves=null, parent=null) {
    this.x = x;
    this.y = y;
    this.moves = moves;
    this.parent = parent;
}

ChessBoxNode.prototype.equals = function(otherChessBoxNode) {
    if(!ChessBoxNode.prototype.isPrototypeOf(otherChessBoxNode)) {
        return false;
    }
    if(!(this.x === otherChessBoxNode.x && this.y === otherChessBoxNode.y)) {
        return false;
    }
    return true;
}

ChessBoxNode.prototype.onBoard = function() {
    return this.x > -1 && this.x < 8 && this.y > -1 && this.y < 8;
}
