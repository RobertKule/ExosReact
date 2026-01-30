import React from 'react'
import { Link } from 'react-router-dom'
function PasTrouve() {
    return (
        <>
        <h3 className='text-lg'>
            Desole cette page n'existe pas
        </h3>
        <p>
            Appuyer ici pour retourner sur la <Link to="/">page d'accueil</Link>. 
        </p>
        </>
    )
}

export default PasTrouve
