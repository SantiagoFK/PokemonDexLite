import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, pipe, catchError } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService 
{
  baseUrl = environment.pokemonsBaseUrl

  constructor(private http: HttpClient){ }

  getPokemons(): Observable<Pokemon[] | any>
  {
    return this.http.get<Pokemon[]>(this.baseUrl).pipe(
      map(pokemons => {
        return pokemons.map(pokemon => {
          return {
            id: pokemon.id,
            name: pokemon.name,
            type: pokemon.type,
            lvl: pokemon.lvl,
            evolutionIds: pokemon.evolutionIds,
            abilities: pokemon.abilities
          }
        })
      }),

      catchError(error => {
        console.log(error)
        return []
      })
    )
  }

  getPokemonById(id: string) : Observable<Pokemon>
  {
    return this.http.get<Pokemon>(`${this.baseUrl}/${id}`)
  }

  postPokemon(pokemon: Partial<Pokemon>): Observable<Pokemon>
  {
      return this.http.post<Pokemon>(
        this.baseUrl,
        pokemon,
        {
          headers: { 'Content-type': 'application/json'}
        }
      )
  }

  updatePokemon(id: string, pokemon: Partial<Pokemon>): Observable<Pokemon>
  {
    return this.http.put<Pokemon>(
      `${this.baseUrl}/${id}`,
      pokemon,
      {
        headers: { 'Content-type': 'application/json' }
      }
    )
  }
  
  deletePokemon(id: string)
  {
    return this.http.delete(`${this.baseUrl}/${id}`)
  }
}
