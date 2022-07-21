import React from 'react'
import Key from './Key'

const Keyboard = () => {

    const keyLayout = [
        [
            'q',
            'w',
            'e',
            'r',
            't',
            'y',
            'u',
            'i',
            'o',
            'p'
        ],
        [
            'a',
            's',
            'd',
            'f',
            'g',
            'h',
            'j',
            'k',
            'l',
        ],
        [
            'z',
            'x',
            'c',
            'v',
            'b',
            'n',
            'm']

    ]

    return (
        <div className='grid place-items-center border border-slate-800 m-2 rounded p-2 md:hidden'>
            <div>
                {keyLayout[0].map((value) => (
                    <Key value={value}/>
                ))}
            </div>
            <div className='p-1'></div>
            <div className='px-2'>
                {keyLayout[1].map((value, index) => (
                    <Key value={value}/>
                ))}
            </div>
            <div className='p-1'></div>
            <div className='px-3'>
                {keyLayout[2].map((value, index) => (
                    <Key value={value}/>
                ))}
            </div>
        </div>
    )
    // <button
    //                 className='border rounded bg-slate-800 text-slate-200 w-8 h-8 p-1'
    //                 key={index}
    //                 >{value}</button>
}

export default Keyboard