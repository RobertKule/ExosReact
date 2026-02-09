import React from 'react'
import { useParams } from 'react-router-dom';

function ContactMe() {
    const { nom } = useParams();
    return (
        <div>
            <h1 className='text-lg'>Contactez-moi, {nom}</h1>
        </div>
    )
}

export default ContactMe
