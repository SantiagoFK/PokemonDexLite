import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PokemonService } from '../../services/pokemon.service';
import { Router } from '@angular/router';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-create-pokemon',
  templateUrl: './create-pokemon.component.html',
  styleUrl: './create-pokemon.component.css'
})
export class CreatePokemonComponent {
  pokemonForm: FormGroup = this.fb.nonNullable.group({
    name: ['', [Validators.required]],
    type: ['', [Validators.required]],
    lvl: ['1', [Validators.required, Validators.min(1)]]
  })

  constructor(private fb: FormBuilder, 
              private pokemonService: PokemonService, 
              private router: Router){ }

  create()
  {
    if(this.pokemonForm.invalid) return
  
    const pokemon: Pokemon = {
      name: this.pokemonForm.controls['name'].value,
      type: this.pokemonForm.controls['type'].value,
      lvl: this.pokemonForm.controls['lvl'].value,
      evolutionIds: [],
      abilities: [],
     }
    
    this.pokemonService.postPokemon(pokemon).subscribe((pokemon) => this.router.navigate(['home']))

    console.log("new pokemon: ", pokemon)
  }

  validateField(field: string, errorType: string): boolean
  {
    return this.pokemonForm.controls[field].getError(errorType)
      && this.pokemonForm.controls[field].touched
  }
}
