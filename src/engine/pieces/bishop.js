import Piece from "./piece";
import Square from "../square";
import King from "./king";

export default class Bishop extends Piece {
  constructor(player) {
    super(player);
  }

  getAvailableMoves(board) {
    let location = board.findPiece(this);
    const moves = [];

    for (
      let row = location.row - 1, col = location.col - 1;
      row >= 0 && col >= 0;
      row--, col--
    ) {
      const piece = board.getPiece(Square.at(row, col));
      if (piece) {
        if (piece.player !== this.player && !(piece instanceof King)) {
          moves.push(Square.at(row, col));
        }
        break;
      }
      moves.push(Square.at(row, col));
    }

    for (
      let row = location.row - 1, col = location.col + 1;
      row >= 0 && col < 8;
      row--, col++
    ) {
      const piece = board.getPiece(Square.at(row, col));
      if (piece) {
        if (piece.player !== this.player && !(piece instanceof King)) {
          moves.push(Square.at(row, col));
        }
        break;
      }
      moves.push(Square.at(row, col));
    }

    for (
      let row = location.row + 1, col = location.col - 1;
      row < 8 && col >= 0;
      row++, col--
    ) {
      const piece = board.getPiece(Square.at(row, col));
      if (piece) {
        if (piece.player !== this.player && !(piece instanceof King)) {
          moves.push(Square.at(row, col));
        }
        break;
      }
      moves.push(Square.at(row, col));
    }

    for (
      let row = location.row + 1, col = location.col + 1;
      row < 8 && col < 8;
      row++, col++
    ) {
      const piece = board.getPiece(Square.at(row, col));
      if (piece) {
        if (piece.player !== this.player && !(piece instanceof King)) {
          moves.push(Square.at(row, col));
        }
        break;
      }
      moves.push(Square.at(row, col));
    }

    return moves;
  }
}
