import Piece from './piece';
import Square from '../square';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        const moves=[];
            for (let row=0; row<8; row++){
                if(row!==location.row)
                moves.push(Square.at(row,location.col));
            }
            for(let col=0;col<8;col++){
                if(col!==location.col)
                moves.push(Square.at(location.row,col));
            }
        return moves;
    }
}

