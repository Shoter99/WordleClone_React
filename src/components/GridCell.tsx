import React from 'react'
import GridRow from './GridRow';
interface Props{
    chr: string;
    row: number;
    col: number;
}
const GridCell = (props: Props) => {
  return (
    <div id={`cell${props.row}${props.col}`} className="transition duration-1000 grid place-items-center border rounded border-slate-800 mx-1 md:w-14 md:h-14 w-10 h-10 text-center">
        <span className='md:text-md'>{props.chr.toUpperCase()}</span>
    </div>
  )
}

export default GridCell