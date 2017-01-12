class Game {
  constructor() {
    this.grid = [
      [".", ".", "."],
      [".", ".", "."],
      [".", ".", "."]
    ]
    this.currentPlayer = "X"
  }

  movePlayed( row, col ) {
    this.grid[row][col] = this.currentPlayer;
    const currentIsCrosses = this.currentPlayer === "X"
    this.currentPlayer = currentIsCrosses ? "O" : "X"
  }

  winner() {
    const combos = this.grid
    combos.push([ this.grid[0][0], this.grid[1][0], this.grid[1][0] ])
    combos.push([ this.grid[0][1], this.grid[1][1], this.grid[1][1] ])
    combos.push([ this.grid[0][2], this.grid[1][2], this.grid[1][2] ])
    combos.push([ this.grid[0][0], this.grid[1][1], this.grid[2][2] ])
    combos.push([ this.grid[0][2], this.grid[1][1], this.grid[2][1] ])

    const winningCombo = combos.find( (combo) => {
      if ( this.comboHasWinner( combo ) ) return combo[0]
      return false
    })

    return winningCombo ? winningCombo[0] : undefined
  }

  comboHasWinner( combo ) {
    if ( combo[0] === "." ) return false
    return combo[0] === combo[1] && combo[0] === combo[2]
  }
}

export default Game
