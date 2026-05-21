import React, { useEffect, useState } from 'react'

function Card({url,nombre,noPokemon}) {
    const [imagen,setImagen] = useState();
    const obtenerImagen = async ()=>{
        try {
            const resultado = await fetch(url);
            const datosPokemon = await resultado.json();

            setImagen(datosPokemon.sprites.other.dream_world.front_default);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        obtenerImagen()
    },[]);

  return (
    <li>
        {imagen && (<img className = " w-[100px] center" src = {imagen}/>)}
      <div>
        
        <p># {noPokemon}</p>
        <h2>{nombre}</h2>
      </div>
    </li>
  )
}

export default Card
