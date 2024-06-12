import { Component, OnInit } from '@angular/core';
import { Pokemon} from '../../interfaces/pokemon.interface';
import { PokemonService } from '../../services/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokedex-lite',
  templateUrl: './pokedex-lite.component.html',
  styleUrl: './pokedex-lite.component.css'
})
export class PokedexLiteComponent implements OnInit
{
  pokemons: Pokemon[] = []

  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit(): void 
  {
    this.getPokemons()  
  }

  getPokemons()
  {
    this.pokemonService.getPokemons().subscribe(
      {
        next: (pokemons) => {
          this.pokemons = pokemons
          console.log(this.pokemons)
        },
        error: (error) => {
          console.log(error)
        }
      }
    )
  }

  addPokemon()
  {
    this.router.navigate(['pokemon'])
  }

  editPokemon(pokemon: Pokemon)
  {
    const id = pokemon.id
    this.router.navigate([`pokemon/${id}`])
  }

  deletePokemon(id: string)
  {
    const okResponse = window.confirm(`Delete pokemon with ID: ${id}?`)

    if( okResponse ) 
    {
      this.pokemonService.deletePokemon(id).subscribe(() => {
        this.pokemons = this.pokemons.filter( (pokemon) => pokemon.id !== id )
      })
    }
  }

  details(pokemon: Pokemon)
  {
    const id = pokemon.id
    this.router.navigate([`pokemon/${id}`])
  }
}
