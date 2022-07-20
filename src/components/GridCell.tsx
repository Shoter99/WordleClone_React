import React from 'react'
interface Props{
    chr: string;
}
const GridCell = (props: Props) => {
  return (
    <div className="grid place-items-center border rounded border-slate-800 md:my-2 mx-1 md:w-16 md:h-16 w-10 h-10 text-center">
        <span className='md:text-md'>{props.chr.toUpperCase()}</span>
    </div>
  )
}

export default GridCell