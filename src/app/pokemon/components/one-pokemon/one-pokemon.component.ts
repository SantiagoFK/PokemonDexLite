import { Component, Input } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-one-pokemon',
  templateUrl: './one-pokemon.component.html',
  styleUrl: './one-pokemon.component.css'
})
export class OnePokemonComponent 
{ 
  @Input('pokemon') pokemon!: Pokemon
  
}
