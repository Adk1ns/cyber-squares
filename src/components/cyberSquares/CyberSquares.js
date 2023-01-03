import React, { useState } from 'react'
import { useAtom } from 'jotai'
import {
  gameViewStatus,
  rows,
  cols,
  lightOnChance,
} from '../../data/store/Atoms'
import Cell from './Cell'

const CyberSquares = () => {
  const [gameView, setGameView] = useAtom(gameViewStatus)
  const [nRows, setNRows] = useAtom(rows)
  const [nCols, setNCols] = useAtom(cols)
  const [lightChance, setLightChance] = useAtom(lightOnChance)
  const [hasWon, setHasWon] = useState(false)
  const [board, setBoard] = useState(createBoard)

  const endGame = () => {
    setGameView('intro')
  }

  function createBoard() {
    let board = []
    // TODO: create array-of-arrays of true/false values
    for (let y = 0; y < nRows; y++) {
      let row = []
      for (let x = 0; x < nCols; x++) {
        row.push(Math.random() < lightChance)
      }
      board.push(row)
    }
    return board
  }

  function flipCellsAround(coord) {
    let [y, x] = coord.split('-').map(Number)

    function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < nCols && y >= 0 && y < nRows) {
        board[y][x] = !board[y][x]
      }
    }
    // TODO: flip this cell and the cells around it
    flipCell(y, x) //Flip initial cell
    flipCell(y, x - 1) //flip left
    flipCell(y, x + 1) //flip right
    flipCell(y - 1, x) //flip below
    flipCell(y + 1, x) //flip above

    // win when every cell is turned off
    // TODO: determine is the game has been won
    let hasWon = board.every((row) => row.every((cell) => !cell))

    setHasWon(true)
  }

  function makeTable() {
    let tblBoard = []
    for (let y = 0; y < nRows; y++) {
      let row = []
      for (let x = 0; x < nCols; x++) {
        let coord = `${y}-${x}`
        row.push(
          <Cell
            key={coord}
            isLit={board[y][x]}
            flipCellsAroundMe={() => flipCellsAround(coord)}
          />
        )
      }
      tblBoard.push(<tr key={y}>{row}</tr>)
    }
    return (
      <table className="Board">
        <tbody>{tblBoard}</tbody>
      </table>
    )
  }

  return (
    <div>
      {makeTable()}
      CyberSquares <button onClick={endGame}>end</button>
    </div>
  )
}

export default CyberSquares
