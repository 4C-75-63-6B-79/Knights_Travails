export default function ChessBoxNode(x, y, dist, parent) {
    this.x = x;
    this.y = y;
    this.dist = dist;
    this.parent = parent;
}

ChessBoxNode.prototype.equals = function(otherChessBoxNode) {
    if(!ChessBoxNode.prototype.isPrototypeOf(otherChessBoxNode)) {
        return false;
    }
    if(!(this.x === otherChessBoxNode.x && this.y === otherChessBoxNode)) {
        return false;
    }
    return true;
}
