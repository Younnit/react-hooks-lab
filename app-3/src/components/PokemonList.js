import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const PokemonList = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon').then((res) => {
        console.log(res.data.results)
      setList(res.data.results)
    })
  }, [])

  return (
    <div>
      {list.map((pokemon) => {
        return (
          <Link key={pokemon.url} to={`/pokemon/${pokemon.name}`}>
            <h2>{pokemon.name}</h2>
          </Link>
        )
      })}
    </div>
  )
}
export default PokemonList
