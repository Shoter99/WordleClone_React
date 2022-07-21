import React from 'react'
import RestartBtn from './RestartBtn'

const EndScreen = ({word, text} : {word: string, text: string}) => {
  return (
    <div className='grid place-items-center'>
        <div className="p-4"></div>
        <div className="border rounded border-slate-800 p-8 text-center bg-slate-800 text-slate-200 text-xl">
            <div className="text-3xl p-4">{text}</div>
            <div className="p-2">Word is: {word.toUpperCase()}</div>
            <RestartBtn />
        </div>
    </div>
  )
}

export default EndScreen