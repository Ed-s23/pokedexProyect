import React, { useContext } from 'react'
import { PageContext } from '../context/PageContext'

const InfoPokemon = () => {

  
  const {pokemonSeleccionado, setPokemonSeleccionado} = useContext(PageContext)
  

  return (
    <div>
      <p className=' p-4 mb-4 shadow-lg  mx-auto '>
        
      
      <button
      
      onClick={()=>{
        setPokemonSeleccionado(null)
      }}
      >Regresar</button>
      {pokemonSeleccionado && pokemonSeleccionado.name}
      {pokemonSeleccionado.name.order}
      
      </p>
    </div>
  )
}

export default InfoPokemon
