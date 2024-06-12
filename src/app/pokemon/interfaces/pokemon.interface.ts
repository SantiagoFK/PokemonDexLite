import { PokemonAbility } from "./pokemonAbility.interface";

export interface Pokemon
{
    id?: string,
    name: string,
    type: string[],
    lvl: number,
    evolutionIds?: string[],
    abilities?: PokemonAbility[]
}