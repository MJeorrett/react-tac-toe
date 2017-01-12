import React from 'react'

const CurrentPlayer = function({ playerSymbol, winner }) {

  let playerString = "The Winner is: " + winner
  if ( !winner ) playerString = `Current player: ${playerSymbol}`

  return (
    <p id="current-player">{ playerString }</p>
  )

}

export default CurrentPlayer
