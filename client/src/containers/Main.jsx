import React from 'react'

import Cell from '../components/Cell'

class Main extends React.Component {

  constructor() {
    super()
    this.handleCellClicked = this.handleCellClicked.bind( this )
    this.state = {
      grid: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ]
    }
  }

  handleCellClicked( row, col ) {
    console.log( "cell clicked: row:", row, " col:", col );
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
        { grid }
      </div>
    )
  }

}

export default Main
