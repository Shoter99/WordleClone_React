import React from 'react'
import GridCell from './GridCell'
interface Props{
    gridRow: string[];
    id: number;
}
const GridRow = (props: Props) => {
  return (
    <div className="flex flex-row p-1">
        {props.gridRow.map((value, index) => (
            <GridCell row={props.id} col={index} key={index} chr={value} />
        ))}
    </div>
  )
}

export default GridRow