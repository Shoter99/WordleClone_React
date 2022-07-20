import React from 'react'
import GridCell from './GridCell'

const GridRow = () => {
  return (
    <div className="flex flex-row p-3">
        <GridCell />
        <GridCell />
        <GridCell />
        <GridCell />
        <GridCell />
    </div>
  )
}

export default GridRow