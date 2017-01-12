import React from 'react'

import Cell from '../components/Cell'

class Main extends React.Component {

  render() {

    var grid = []

    for( var row = 0; row < 3; row++ ) {
      const rowCells = []
      for( var col = 0; col < 3; col++ ) {
        rowCells.push(
          <Cell
            key={ [row, col].toString() }
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
