// import React, { useEffect, useState } from 'react'
// //*En esta sona se ejecuta JavaScript
// const ListaPokemons = () => {

//   // ! Se ejecuta puro jsx, se pueden usar hoocks 
//   const URL = "https://pokeapi.co/api/v2/pokemon/";
//   const [pokemon, setPokemons] = useState([]) //! Uso de useState, esperando arreglos 
//   const obtenerPokemons = async(url) =>{ //*Funcion de flecha para resiclarce
//     //*fetch reaaliza una peticion, async y awayt 
//     try {
//         const resultado = await fetch(url);
//         const datosPokemon = await resultado.json();
//         setPokemons(datosPokemon.results);
//     } catch (error) {
//       console.error(error);
      
//     }
//   }
//   useEffect(()=>{
//       console.log(pokemons);  //*Consultar si se guarda en el hook para pkemons 
//   },[pokemons]);
//   //*LLamar funciones, usando useefect 
//   useEffect(()=> {
//     obtenerPokemons(URL);
//   },[])

//   return (
//     <section>
//       <ul>
//         {
//           pokemons.map((pokemon,indice)=>(
//           <li>
//             <h2>{pokemon.name}</h2>
//           </li> 
//         ))
//         }
//       </ul>
//     </section>
//   )
// }

// export default ListaPokemons

import Card from "../components/Card"
import { useEffect, useState } from "react"

const ListaPokemons = () => {
  const URL = "https://pokeapi.co/api/v2/pokemon/"
  const [pokemons, setPokemons] = useState([])

  const obtenerPokemons = async (url) => {
    try {
      const resultado = await fetch(url)
      const datosPokemon = await resultado.json()
      setPokemons(datosPokemon.results)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    console.log(pokemons)
  }, [pokemons])

  useEffect(() => {
    obtenerPokemons(URL)
  }, [])

  return (
    <section>
      <ul className=" flex flex-wrap w-full gap-2">
        {pokemons.map((pokemon, indice) => (
          <Card 
          key = {indice}
          url = {pokemon.url} 
          nombre={pokemon.name} 
          noPokemon={indice +1}
          />
        ))}
      </ul>
    </section>
  )
}

export default ListaPokemons