import React from 'react'

function Footer(props) {
    return (
        <>
        <div className="m-2 flex-row justify-start gap-6 items-center border border-2 hover:border-blue-500 p-4 rounded shadow-2xl hover:shadow-blue-600 cursor-pointer ">
            <h1 className='font-bold text-4xl bg-gray-200 p-4'>
{props.nom}
        </h1>
        <p>{props.children}</p>
        </div>
        </>
        
    )
}

export default Footer
