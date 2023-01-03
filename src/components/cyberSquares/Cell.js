import React from 'react'
import './Cell.css'

const Cell = ({ isLit, flipCellsAroundMe, coord }) => {
  const handleClick = () => {
    flipCellsAroundMe(coord)
  }
  let classes = 'Cell' + (isLit ? ' Cell-lit' : '')
  return <td className={classes} onClick={handleClick} />
}

export default Cell
