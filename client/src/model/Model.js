class Game {
  constructor() {
    this.grid = [
      [".", ".", "."],
      [".", ".", "."],
      [".", ".", "."]
    ]
    this.currentPlayer = "X";
  }

  movePlayed( row, col ) {
    this.grid[row][col] = this.currentPlayer;
    const currentIsCrosses = this.currentPlayer === "X"
    this.currentPlayer = currentIsCrosses ? "O" : "X"
  }
}

export default Game
