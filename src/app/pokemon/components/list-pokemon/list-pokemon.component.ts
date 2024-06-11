import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrl: './list-pokemon.component.css'
})
export class ListPokemonComponent implements OnInit
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
        },
        error: (error) => {
          console.log(error)
        }
      }
    )
  }
}
