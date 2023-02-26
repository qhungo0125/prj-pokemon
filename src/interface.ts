export interface PokeFull{
    id: number;
    name: string;
    sprites:{
      front_default: string
    }
  }

export interface PokeFullAb extends PokeFull{
  abilities?: {
    name: string
    ability: string
  }[]

  height?: number;
  weight?: number;
  base_experience?: number
}
