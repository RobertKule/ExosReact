import React from 'react'

function User({titre,tableau}) {
    return (
        <>
        <h1 className='text-4xl font-bold mb-6 text-blue-600 border-t '>{titre}</h1>
    <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {tableau.map(element =>(
        <div className=" w-64 p-2 border">
          <li className="text-lg font-bold ">
            {element.nom}
            </li>
          <li>{element.description}</li>
        </div>
      ))}
    </ul>
        </>
    )
}

export default User
