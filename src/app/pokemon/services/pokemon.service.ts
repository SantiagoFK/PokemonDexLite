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

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<Pokemon[] | any>
  {
    return this.http.get<Pokemon[]>(this.baseUrl).pipe(
      map(pokemons => {
        return pokemons.map(pokemon => {
          return {
            id: pokemon.id,
            name: pokemon.name,
            type: pokemon.type
          }
        })
      }),

      catchError(error => {
        console.log(error)
        return []
      })
    )
  }
}
