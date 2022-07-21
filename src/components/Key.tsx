import React from 'react'

const Key = ({ value }: { value: string }) => {
    return (
        <button
            className='border rounded bg-slate-800 text-slate-200 w-8 h-8 p-1'
            key={value}
        >{value.toUpperCase()}</button>
    )
}

export default Key