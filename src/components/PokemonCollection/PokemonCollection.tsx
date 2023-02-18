// rafce
import React from 'react'
import { PokeFull, PokeFullAb } from '../../interface'
import PokemonItem from '../PokemonItem/PokemonItem'

interface Props{
    pokemons: PokeFullAb[]
}

const PokemonCollection:React.FC<Props> = (props) => {

    const {pokemons} = props

  return (
    <div>
        <section className='collection-container row mx-0 justify-content-between'>
            {pokemons.map(poke=>{
                return(
                    <PokemonItem
                    key={poke.id}
                    id={poke.id}
                    name={poke.name}
                    abilities= {poke.abilities}
                    image={poke.sprites.front_default}
                    />
                )
            })}
        </section>
    </div>
  )
}

export default PokemonCollection