import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PokemonService } from '../../services/pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { PokemonAbility } from '../../interfaces/pokemonAbility.interface';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrl: './pokemon-form.component.css'
})
export class PokemonFormComponent implements OnInit
{
  formIsOnEditMode: boolean = false
  pokemonId? : string
  pokemon?: Pokemon
  addedAbilities: PokemonAbility[] = []
  addedTypes: string[] = []
  evolutions: Pokemon[] = []

  pokemonForm: FormGroup = this.fb.nonNullable.group({
    name: ['', [Validators.required]],
    type: ['', [Validators.required]],
    lvl: ['1', [Validators.required, Validators.min(1)]],
    evolutionIds: [],
    abilities: []
  })

  constructor(private fb: FormBuilder, 
              private pokemonService: PokemonService, 
              private router: Router,
              private route: ActivatedRoute){ }

  ngOnInit(): void 
  {
    this.route.params.subscribe(async params => {
      this.pokemonId = params['id'];
    })

    if( this.pokemonId ) {
      this.formIsOnEditMode = true
      this.pokemonService.getPokemonById(this.pokemonId).subscribe((pokemon) => {
        this.pokemon = pokemon
        console.log(this.pokemon)
        this.pokemon.evolutionIds?.forEach((id) => this.pokemonService.getPokemonById(id).subscribe((pokemon) => {
          this.evolutions.push(pokemon)
        }))
        this.updateForm(pokemon)
      })
    }
  }

  submitPokemon()
  {
    if(this.pokemonForm.invalid) return

    //refactor to accept evolutionId and abilities later
    const pokemon: Pokemon = {
      name: this.pokemonForm.controls['name'].value,
      type: this.pokemonForm.controls['type'].value,
      lvl: this.pokemonForm.controls['lvl'].value,
      evolutionIds: [],
      abilities: []
     }

    //update 
    if( this.pokemonId )
    {
      this.pokemonService.updatePokemon(this.pokemonId, pokemon)
        .subscribe((pokemon) => this.router.navigate(['home']))
    } else { //create new
      this.pokemonService.postPokemon(pokemon)
        .subscribe((pokemon) => this.router.navigate(['home']))
    }

    console.log("new pokemon: ", pokemon)
  }

  updateForm(pokemon: Pokemon)
  {
    let { id: _, ...pokemonForm} = pokemon

    this.pokemonForm.setValue(pokemonForm)
  }

  validateField(field: string, errorType: string): boolean
  {
    return this.pokemonForm.controls[field].getError(errorType)
      && this.pokemonForm.controls[field].touched
  }


}
