class Game {
  constructor() {
    this.grid = [
      [".", ".", "."],
      [".", ".", "."],
      [".", ".", "."]
    ]
    this.currentPlayer = 1;
  }

  movePlayed( row, col ) {
    this.grid[row][col] = "X";
  }
}

export default Game
