import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() detailsEvent = new EventEmitter<Pokemon>()
  @Output() editEvent = new EventEmitter<Pokemon>()
  @Output() deleteEvent = new EventEmitter<string>()

  itemTrackBy(index: number, item: Pokemon)
  { 
    return item.id
  }

  onDetails(pokemon: Pokemon)
  {
    this.detailsEvent.emit(pokemon)
  }

  onEdit(pokemon: Pokemon)
  {
    this.editEvent.emit(pokemon)
  }

  onDelete(id: string)
  {
    this.deleteEvent.emit(id)
  }
  
}
