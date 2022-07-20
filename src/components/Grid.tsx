import React from 'react'
import GridRow from './GridRow'
interface Props{
  grid: string[][];
}
const Grid = (props: Props) => {
  return (
    <div className='grid place-items-center'>
      {props.grid.map((value, index) => (
        <GridRow key={index} id={index} gridRow={value} />
      ))}
    </div>
  )
}

export default Grid