
import Card from "../components/Card"
import { Children, useContext, useEffect, useEffectEvent, useState } from "react"
import {Plus,Search, Target } from 'lucide-react'

const ListaPokemons = () => {


  const URL = "https://pokeapi.co/api/v2/pokemon/"
  const URLFull = "https://pokeapi.co/api/v2/pokemon/?limit=1000&offset=0"
  const [pokemons, setPokemons] = useState([]); 
  const [next,setNext] = useState(null); //Nuevo hocks
  const [pokemonName, setPokemonName] = useState("");
  const [todosPokemons,setTodosPokemons] = useState([])
  //const [estadoNombre, setEstadoNombre] =useState(false)
 
  const pokemonByName = todosPokemons.filter(pokemons => 
    pokemons.name.includes(pokemonName))   

  //! Nuevo estado 
  const handleChangePokemonName = (e,evt)=> {
    setPokemonName(e.target.value.toLowerCase())

  }


 // ! LLamada a todos los pokemons a la hora de la busuqeda 
   const allPokemons = async (url)=>{
       try {
      const resultado = await fetch(url);
      const datosPokemon = await resultado.json();
      setTodosPokemons([...todosPokemons, ...datosPokemon.results]);//* No mover, es quien almacena los poquemonees para la busqueda
       } catch (error) {
         console.error(error("Erro al cargar las cosas",error))
      }
     }
  const obtenerPokemons = async (url) => {
    try {
      const resultado = await fetch(url);
      const datosPokemon = await resultado.json();
      setPokemons([...pokemons, ...datosPokemon.results]);
      setNext(datosPokemon.next)
    
    } catch (error) {
      console.error(error)
    }
  }
//todo: creo que almacena los 20 pokemons y los imprime con un .log
  useEffect(() => {
    console.log(pokemons)
  }, [pokemons])
//todo: Funciona para el resto de pokemones creo
  useEffect(()=>{
    console.log(pokemonByName)
  }, [pokemonByName])
//! 50  pokemons
  useEffect(() => {
    obtenerPokemons(URL)
    allPokemons(URLFull)
  }, [])

// Determinar qué lista renderizar
  const tieneBusqueda = pokemonName.trim() !== "";
 //const listaALeera =  pokemonByName

  return (
    <section>
      <div className="flex justify-center mb-10" >
      <form className="flex border-2 border-red-900 px-2">
        <input 
        type="text" 
        name="pokemonName"
        autoComplete="off"
        placeholder="Buscar un pokemon" 
        className="outline-none " 
        onChange={handleChangePokemonName}
        /> 
        <Search />
      </form>
      </div>

      <ul className=" flex flex-wrap w-full justify-center gap-2">
        {!tieneBusqueda? 
        (pokemons.map((pokemon, indice) => (
          <Card 
          key = {indice}
          url = {pokemon.url} 
          nombre={pokemon.name} 
          noPokemon={indice +1}
          />
         ))
        ):

        (pokemonByName.map((pokemon)=>(
        <Card
          key = {pokemon.url}
          url = {pokemon.url} 
          nombre={pokemon.name} 
         // noPokemon={pokemonName.url.id}
        />
        )))
  }
       
        
      </ul>
      <div className="flex w-full justify-center my-10">
        {
          next &&
          <button onClick={()=> obtenerPokemons(next)}
          className="flex gap-1 bg-red-900 text-white px-2 py-1 rounded shadow cursor-pointer" 
        > <Plus />Mostrar mas</button>
        }
      </div>
    </section>
  )
}

export default ListaPokemons