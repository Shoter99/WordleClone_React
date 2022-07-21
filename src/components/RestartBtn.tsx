import React from 'react'

const RestartBtn = () => {

    const reloadWindow = () => {
        window.location.reload();
    }


    return (
        <div className="p-3">
            <button onClick={reloadWindow} className='bg-slate-300 p-2 text-slate-700 hover:text-slate-300 hover:bg-slate-700 transition duration-500'>Restart</button>
        </div>
    )
}

export default RestartBtn