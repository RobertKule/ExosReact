import React, { Children } from 'react'

function Header({nom,surnom,Children}) {
    
    return (
        <>
            <h1 className='text-2xl m-2 cursor-pointer'>
                Bonjour 
                <span className='font-bold text-blue-800'>
                     {'  '+nom +" "+ surnom}
                </span>
                
            </h1>
            <p>
                {Children}
            </p>
        </>
    )
}

export default Header
