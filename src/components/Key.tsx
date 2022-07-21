import React from 'react'

const Key = ({ value, onClick }: { value: string, onClick: any }) => {
    return (
        <button
            id={`key${value}`}
            onClick={() => onClick(value)}
            className='border rounded bg-slate-800 text-slate-200 w-8 h-8 p-1 m-1 border-slate-800'
            key={value}
        >{value === "Enter" ? "\u23CE" : value.toUpperCase()}</button>
    )
}

export default Key