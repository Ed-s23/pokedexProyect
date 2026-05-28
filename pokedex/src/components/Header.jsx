import React, { useState } from 'react'

const Header = () => {

    return (
    <header className="bg-red-700 p-4 mb-4 shadow-lg text-center">
       <p className='w-30 h-10   mx-auto  '>
          <img  src='../../public/imagenes/snorlax-bw.png' ></img>
        </p>
        <p className='w-60 h-20  mx-auto '>
          <img  src='../../public/imagenes/poke-title.png'></img>
        </p>
    </header>
  )
}

export default Header
