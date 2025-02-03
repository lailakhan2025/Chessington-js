import Piece from "./piece";
import Square from "../square";
import King from "./king";

export default class Rook extends Piece {
  constructor(player) {
    super(player);
  }

  getAvailableMoves(board) {
    let location = board.findPiece(this);
    const moves = [];

    for (let row = location.row - 1; row >= 0; row--) {
      if (
        (board.getPiece(Square.at(row, location.col)) &&
          board.getPiece(Square.at(row, location.col)).player == this.player) ||
        board.getPiece(Square.at(row, location.col)) instanceof King
      ) {
        break;
      } else if (
        board.getPiece(Square.at(row, location.col)) &&
        board.getPiece(Square.at(row, location.col)).player != this.player
      ) {
        moves.push(Square.at(row, location.col));
        break;
      } else {
        moves.push(Square.at(row, location.col));
      }
    }

    for (let row = location.row + 1; row < 8; row++) {
      if (
        (board.getPiece(Square.at(row, location.col)) &&
          board.getPiece(Square.at(row, location.col)).player == this.player) ||
        board.getPiece(Square.at(row, location.col)) instanceof King
      ) {
        break;
      } else if (
        board.getPiece(Square.at(row, location.col)) &&
        board.getPiece(Square.at(row, location.col)).player != this.player
      ) {
        moves.push(Square.at(row, location.col));
        break;
      } else {
        moves.push(Square.at(row, location.col));
      }
    }

    for (let col = location.col - 1; col >= 0; col--) {
      if (
        (board.getPiece(Square.at(location.row, col)) &&
          board.getPiece(Square.at(location.row, col)).player == this.player) ||
        board.getPiece(Square.at(location.row, col)) instanceof King
      ) {
        break;
      } else if (
        board.getPiece(Square.at(location.row, col)) &&
        board.getPiece(Square.at(location.row, col)).player != this.player
      ) {
        moves.push(Square.at(location.row, col));
        break;
      } else {
        moves.push(Square.at(location.row, col));
      }
    }
    for (let col = location.col + 1; col < 8; col++) {
      if (
        (board.getPiece(Square.at(location.row, col)) &&
          board.getPiece(Square.at(location.row, col)).player == this.player) ||
        board.getPiece(Square.at(location.row, col)) instanceof King
      ) {
        break;
      } else if (
        board.getPiece(Square.at(location.row, col)) &&
        board.getPiece(Square.at(location.row, col)).player != this.player
      ) {
        moves.push(Square.at(location.row, col));
        break;
      } else {
        moves.push(Square.at(location.row, col));
      }
    }
    return moves;
  }
}
