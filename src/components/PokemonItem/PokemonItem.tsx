import React from 'react'

interface Props{
    name:string;
    image: string;
    id: number;
}

const PokemonItem:React.FC<Props> = (props) => {
    const {name,image, id}= props
  return (
        <section className='pokemonItem col-md-1'>
            <p className="pokemon__name">
                {name}
            </p>
            <img src={image} alt="pokemon" />
        </section>
  )
}

export default PokemonItem