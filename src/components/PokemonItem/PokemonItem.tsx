import React from 'react'

interface Props{
    name:string;
    image: string;
    id: number;
    abilities: {
        name: string
        ability: string
    }[] | undefined
}



const PokemonItem:React.FC<Props> = (props) => {
    const {name,image, id, abilities}= props

  return (
        <section className='pokemonItem col-md-2'>
            <img src={image} alt="pokemon" />
            <p className="pokemon__name">
                {name}
            </p>
            <p className='overflow-visible'>
                abilities: 
                {abilities?.map( (ab: any) =>{
                    return ab.ability.name
                }).join(" || ")}
            </p>
        </section>
  )
}

export default PokemonItem