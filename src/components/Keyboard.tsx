import React from 'react'
import Key from './Key'

const Keyboard = ({checkKey} : { checkKey: any}) => {

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
            'p',
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
            'm',
            'Enter'
        ]

    ]

    return (
        <div className="grid place-items-center">

        <div className='relative grid place-items-center border border-slate-800 w-full md:m-2 rounded p-2 max-w-3xl'>
            <div>
            <button
                onClick={() => checkKey("Backspace")}
                className='absolute right-7 border rounded bg-slate-800 text-slate-200 p-1'
                >{"Backspace"}</button>
            </div>
            <div className='p-6'></div>
            <div>
                {keyLayout[0].map((value, index) => (
                    <Key key={index} onClick={checkKey} value={value}/>
                    ))}
            </div>
            <div className='p-1'></div>
            <div className='px-2'>
                {keyLayout[1].map((value, index) => (
                    <Key key={index} onClick={checkKey} value={value}/>
                ))}
            </div>
            <div className='p-1'></div>
            <div className='px-3'>
                {keyLayout[2].map((value, index) => (
                    <Key key={index} onClick={checkKey} value={value}/>
                ))}
            </div>
        </div>
    </div>
    )
    // <button
    //                 className='border rounded bg-slate-800 text-slate-200 w-8 h-8 p-1'
    //                 key={index}
    //                 >{value}</button>
}

export default Keyboard