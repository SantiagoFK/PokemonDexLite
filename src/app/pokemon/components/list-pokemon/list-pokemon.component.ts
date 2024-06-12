import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrl: './list-pokemon.component.css'
})
export class ListPokemonComponent
{ 
  @Input('pokemons') pokemons!: Pokemon[]

  itemTrackBy(index: number, item: Pokemon)
  { 
    return item.id
  }
}
