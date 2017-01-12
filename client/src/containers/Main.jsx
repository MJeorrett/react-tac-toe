import React from 'react'

import Cell from '../components/Cell'
import CurrentPlayer from '../components/CurrentPlayer'
import Model from '../model/Model'

class Main extends React.Component {

  constructor() {
    super()
    this.handleCellClicked = this.handleCellClicked.bind( this )
    this.model = new Model()
    this.state = {
      grid: this.model.grid,
      currentPlayerSymbol: this.model.currentPlayer,
      winner: undefined
    }
  }

  handleCellClicked( row, col ) {
    console.log( "cell clicked: row:", row, " col:", col );
    this.model.movePlayed( row, col )
    const winner = this.model.winner()
    this.setState({
      grid: this.model.grid,
      currentPlayerSymbol: this.model.currentPlayer,
      winner: winner
    })
  }

  render() {
    var grid = []

    for( var row = 0; row < 3; row++ ) {
      const rowCells = []
      for( var col = 0; col < 3; col++ ) {
        rowCells.push(
          <Cell
            key={ [row, col].toString() }
            row={ row }
            col={ col }
            contents={ this.state.grid[row][col] }
            clickCallback={ this.handleCellClicked }
          />
        )
      }
      grid.push( <div key={ row.toString() } className="row">{ rowCells }</div> );
    }

    return(
      <div id="main-container">
        <CurrentPlayer
          playerSymbol={ this.state.currentPlayerSymbol }
          winner={ this.state.winner }
        />
        { grid }
      </div>
    )
  }

}

export default Main
