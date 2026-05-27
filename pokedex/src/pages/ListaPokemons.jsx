
import Card from "../components/Card"
import { Children, useContext, useEffect, useState } from "react"
import {Plus,Search, Target } from 'lucide-react'

const ListaPokemons = () => {


  const URL = "https://pokeapi.co/api/v2/pokemon/"
  const URLFull = "https://pokeapi.co/api/v2/pokemon/?limit=100000&offset=0"
  const [pokemons, setPokemons] = useState([]); 
  const [next,setNext] = useState(null); //Nuevo hocks
  const [pokemonName, setPokemonName] = useState("");

 const [todosPokemons,setTodosPokemons] = useState([])
 
  const pokemonByName = todosPokemons.filter(pokemons => 
    pokemons.name.includes(pokemonName))
  console.log(pokemonByName)
   //const {contexto,setContexto} = useContext(value)
  //! Nuevo estado 
  const handleChangePokemonName = (e)=> 
     setPokemonName(e.target.value.toLowerCase())
  // //  console.log("change")

  





 // ! LLamada a todos los pokemons a la hora de la busuqeda 

//   // // const buscadorPrueva = ({children}) = {
   const allPokemons = async (url)=>{
       try {
      const resultado = await fetch(url);
      const datosPokemon = await resultado.json();
      setTodosPokemons([...todosPokemons, ...datosPokemon.results]);
       } catch (error) {
         console.error(error)
      }

     }
   

  //const handleSu
  const obtenerPokemons = async (url) => {// Obtiene Url 
    try {
      const resultado = await fetch(url);
      const datosPokemon = await resultado.json();
      setPokemons([...pokemons, ...datosPokemon.results]);
      setNext(datosPokemon.next)
    
    } catch (error) {
      console.error(error)
    }
  }


  useEffect(() => {
    console.log(pokemons)
  }, [pokemons])
//! 50  pokemons
  useEffect(() => {
    obtenerPokemons(URL)
  }, [])
//! Todos los poqumons
   useEffect(() => {
     allPokemons(URLFull)
   }, [])

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
        {pokemons.map((pokemon, indice) => (
          <Card 
          key = {indice}
          url = {pokemon.url} 
          nombre={pokemon.name} 
          noPokemon={indice +1}
          />


        ))}

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