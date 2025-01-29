import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let firstmove = false;
        let direction =0;
        if((this.player===Player.WHITE&&location.row===1) || (this.player===Player.BLACK&&location.row===6)){
            firstmove = true;
        }
        this.player===Player.WHITE? direction=1:direction=-1;

            if(!board.getPiece(Square.at(location.row+(1*direction),location.col))){
                if(!firstmove){
                return [Square.at(location.row+(1*direction),location.col)];}
                else{
                    if(!board.getPiece(Square.at(location.row+(2*direction),location.col))){
                        return [Square.at(location.row+(1*direction),location.col),Square.at(location.row+(2*direction),location.col)];
                    }
                    else{
                        return [Square.at(location.row+(1*direction),location.col)];}
                    }
            }
            else{
                return [];           
            }
            
            }
        }





       /* if (this.player === Player.WHITE){
            if(location.row===1) {
                if(board.getPiece(Square.at(location.row+2,location.col))===undefined){
                    return [Square.at(location.row+2,location.col)];
                }
                else if(board.getPiece(Square.at(location.row+1,location.col))===undefined){
                return [Square.at(location.row+1,location.col)];
                }
            }
            else{
                if(board.getPiece(Square.at(location.row+1,location.col))===undefined){
                    return [Square.at(location.row+1,location.col)];
                }
            }
        }
        else {  
            if(location.row===6) {
                if(board.getPiece(Square.at(location.row-2,location.col))===undefined){
                    return [Square.at(location.row-2,location.col)];
                }
                else if(board.getPiece(Square.at(location.row-1,location.col))===undefined){
                return [Square.at(location.row-1,location.col)];
                }
            }
            else{
                if(board.getPiece(Square.at(location.row-1,location.col)===undefined)){
                    return [Square.at(location.row-1,location.col)];
                }

            }
        }
    
    }
}*/