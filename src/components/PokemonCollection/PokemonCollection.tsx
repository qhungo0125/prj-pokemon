// rafce
import React from 'react'
import { PokeFull } from '../../interface'
import PokemonItem from '../PokemonItem/PokemonItem'

interface Props{
    pokemons: PokeFull[]
}

const PokemonCollection:React.FC<Props> = (props) => {

    const {pokemons} = props

  return (
    <div>
        <section className='collection-container row mx-0'>
            {pokemons.map(poke=>{
                return(
                    <PokemonItem
                    key={poke.id}
                    id={poke.id}
                    name={poke.name}
                    image={poke.sprites.front_default}
                    />
                )
            })}
        </section>
    </div>
  )
}

export default PokemonCollection