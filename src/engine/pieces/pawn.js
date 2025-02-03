import Player from "../player";
import Square from "../square";
import King from "./king";
import Piece from "./piece";

export default class Pawn extends Piece {
  constructor(player) {
    super(player);
  }

  getAvailableMoves(board) {
    let location = board.findPiece(this);
    let firstmove = false;
    let direction = 0;
    if (
      (this.player === Player.WHITE && location.row === 1) ||
      (this.player === Player.BLACK && location.row === 6)
    ) {
      firstmove = true;
    }
    this.player === Player.WHITE ? (direction = 1) : (direction = -1);

    if (location.row + 1 * direction >= 0 && location.row + 1 * direction < 8) {
      if (
        board.getPiece(
          Square.at(location.row + 1 * direction, location.col + 1)
        ) &&
        board.getPiece(
          Square.at(location.row + 1 * direction, location.col + 1)
        ).player != this.player &&
        !(
          board.getPiece(
            Square.at(location.row + 1 * direction, location.col + 1)
          ) instanceof King
        )
      ) {
        return [Square.at(location.row + 1 * direction, location.col + 1)];
      } else if (
        board.getPiece(
          Square.at(location.row + 1 * direction, location.col - 1)
        ) &&
        board.getPiece(
          Square.at(location.row + 1 * direction, location.col - 1)
        ).player != this.player &&
        !(
          board.getPiece(
            Square.at(location.row + 1 * direction, location.col - 1)
          ) instanceof King
        )
      ) {
        return [Square.at(location.row + 1 * direction, location.col - 1)];
      } else {
        if (
          !board.getPiece(Square.at(location.row + 1 * direction, location.col))
        ) {
          if (!firstmove) {
            return [Square.at(location.row + 1 * direction, location.col)];
          } else {
            if (
              !board.getPiece(
                Square.at(location.row + 2 * direction, location.col)
              )
            ) {
              return [
                Square.at(location.row + 1 * direction, location.col),
                Square.at(location.row + 2 * direction, location.col),
              ];
            } else {
              return [Square.at(location.row + 1 * direction, location.col)];
            }
          }
        } else {
          return [];
        }
      }
    } else {
      return [];
    }
  }
}
