import { useState, useEffect } from 'react'

function Search() {
  const [pokemons, setPokemons] = useState([])  //guarda as informacoes vindas da api
  const [busca, setBusca] = useState('') //guarda o valor digitado pelo usuarios
  const [pokemonsFiltrados, setPokemonsFiltrados] = useState([]) //compara o que foi buscado com a lista de pokemons para ver se tem a info buscada
  
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(response => response.json())
      .then(data => setPokemons(data.results))
  }, [])

    function handleInput(event){
      setBusca(event.target.value)
}

        useEffect(()=> {
            setPokemonsFiltrados(pokemons.filter(pokemon => pokemon.name.includes(busca)))
        }, [busca, pokemons])

       

        return(
        <>
        <input onChange={handleInput} placeholder="digite um pokemon" />
                {pokemonsFiltrados.map(item => {
                    return(
                    <h2 key={item.name}>{item.name}</h2>
            )
            })}
        </>
    )
}

    export default Search
