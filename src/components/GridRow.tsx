import React from 'react'
import GridCell from './GridCell'
interface Props{
    gridRow: string[];
}
const GridRow = (props: Props) => {
  return (
    <div className="flex flex-row p-3">
        {props.gridRow.map((value, index) => (
            <GridCell key={index} chr={value} />
        ))}
    </div>
  )
}

export default GridRow