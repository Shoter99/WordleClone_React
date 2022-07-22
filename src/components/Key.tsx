import React from 'react'

const Key = ({ value, onClick }: { value: string, onClick: any }) => {
    return (
        <button
            id={`key${value}`}
            onClick={() => onClick(value)}
            className='border rounded bg-slate-800 text-slate-200 w-7 h-7 mx-[0.05em] md:m-1 md:w-12 md:h-12 border-slate-800'
            key={value}
        >{value === "Enter" ? "\u23CE" : value.toUpperCase()}</button>
    )
}

export default Key