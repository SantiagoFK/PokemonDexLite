import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PokemonService } from '../../services/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-pokemon',
  templateUrl: './create-pokemon.component.html',
  styleUrl: './create-pokemon.component.css'
})
export class CreatePokemonComponent {
  pokemonForm: FormGroup = this.fb.nonNullable.group({
    name: ['', [Validators.required]],
    type: ['', [Validators.required]]
  })

  constructor(private fb: FormBuilder, 
              private pokemonService: PokemonService, 
              private router: Router){ }

  create()
  {
    if(this.pokemonForm.valid)
    {
      const name = this.pokemonForm.controls['name'].value
      const type = this.pokemonForm.controls['type'].value

      console.log(`New pokemon: ${name}, ${type}`)
      this.router.navigate([''])
    }
  }

  validateField(field: string, errorType: string): boolean
  {
    return this.pokemonForm.controls[field].getError(errorType)
      && this.pokemonForm.controls[field].touched
  }
}
