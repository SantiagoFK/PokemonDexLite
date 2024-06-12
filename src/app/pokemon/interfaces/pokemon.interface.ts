import { PokemonAbility } from "./pokemonAbility.interface";

export interface Pokemon
{
    id?: string,
    name: string,
    types: string[],
    lvl: number,
    evolutionIds?: string[],
    abilities?: PokemonAbility[]
}