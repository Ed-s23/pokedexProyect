import React, { useContext, useEffect, useState } from 'react'
import {SyncLoader} from 'react-spinners'

function Card({url,nombre,noPokemon}) {

    const URL = "https://pokeapi.co/api/v2/pokemon/"
    //const URLFull = "https://pokeapi.co/api/v2/pokemon/?limit=1000&offset=0"
    const [imagen,setImagen] = useState();
    
    //const [idPokemon,setIdPokemon] = useState();
    const obtenerImagen = async ()=>{
        try {
            const resultado = await fetch(url);
            const datosPokemon = await resultado.json();
            setImagen(datosPokemon.sprites.other.dream_world.front_default);
           // setIdPokemon(datosPokemon.id)
        } catch (error) {
            console.log(error);
        }
    }
    // useContext(()=>{
    //   setIdPokemon(todosPokemons)
    // },[])
    useEffect(()=>{
        obtenerImagen()

    },[]);

  return (
    <li className='transition duration-300 hover:scale-110 h-[180px] mb-8'>
        {imagen? (<img className = " w-[150px] h-[150px] mb-[-32px]" src = {imagen}/>):
          <SyncLoader   className='m-auto ' />
         }
      <div className='bg-slate-800 text-white p-2 pt-6 shadow-2xl shadow-yellow-100 rounded' >
        
        <p className='text-yellow-300 font-bold text-lg'>#{noPokemon}</p>
        
        <h2 className='text-red-400 text-2xl capitalize'>{nombre}</h2>
      </div>
    </li>
  )
}

export default Card
