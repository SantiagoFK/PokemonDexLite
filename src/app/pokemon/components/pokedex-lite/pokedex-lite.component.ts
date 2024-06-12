import { Component, OnInit } from '@angular/core';
import { Pokemon} from '../../interfaces/pokemon.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokedex-lite',
  templateUrl: './pokedex-lite.component.html',
  styleUrl: './pokedex-lite.component.css'
})
export class PokedexLiteComponent implements OnInit
{
  pokemons: Pokemon[] = []

  constructor(private pokemonService: PokemonService) { }

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
}
