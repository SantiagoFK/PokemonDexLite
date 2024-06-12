import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-one-pokemon',
  templateUrl: './one-pokemon.component.html',
  styleUrl: './one-pokemon.component.css'
})
export class OnePokemonComponent 
{ 
  @Input('pokemon') pokemon!: Pokemon
  @Output() detailsEvent = new EventEmitter<Pokemon>()
  @Output() editEvent = new EventEmitter<Pokemon>()
  @Output() deleteEvent = new EventEmitter<string>()

}
