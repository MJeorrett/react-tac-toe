import React from 'react'

class Cell extends React.Component {

  constructor() {
    super()
    this.handleCellClicked = this.handleCellClicked.bind( this )
  }

  handleCellClicked() {
    this.props.clickCallback( this.props.row, this.props.col );
  }

  render() {
    return (
      <button
        className="cell"
        onClick={ this.handleCellClicked }
      >
        { this.props.contents }
      </button>
    )
  }
}

export default Cell
