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

  abilities: PokemonAbility[] = []
  types: string[] = []
  evolutions: string[] = []
  
  evolutionsSnapshots: Pokemon[] = []
  pokemonsSnapshots: Partial<Pokemon>[] = []


  pokemonForm: FormGroup = this.fb.nonNullable.group({
    name: ['', [Validators.required]],
    type: ['', Validators.required],
    lvl: ['1', [Validators.required, Validators.min(1)]],
    evolutionId: [''],
    abilityName: [''],
    abilityDesc: ['']
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
        this.pokemon.evolutionIds?.forEach((id) => this.pokemonService.getPokemonById(id).subscribe((pokemon) => {
          this.evolutionsSnapshots.push(pokemon)
        }))
        this.updateForm(pokemon)
      })
    }
  }

  submitPokemon()
  {
    if(this.pokemonForm.invalid) return

    const pokemon: Pokemon = {
      name: this.pokemonForm.controls['name'].value,
      lvl: this.pokemonForm.controls['lvl'].value,
      types: this.types,
      abilities: this.abilities,
      evolutionIds: this.evolutions
     }

    //update 
    if( this.pokemonId )
    {
      this.pokemonService.updatePokemon(this.pokemonId, pokemon)
        .subscribe(() => this.router.navigate(['home']))
    } else { 
      //create new
      console.log("to submit", pokemon)
      this.pokemonService.postPokemon(pokemon)
        .subscribe(() => this.router.navigate(['home']))
    }

    console.log("new pokemon: ", pokemon)
  }

  updateForm(pokemon: Pokemon)
  {

    this.pokemonForm = this.fb.nonNullable.group({
      name: [pokemon.name, [Validators.required]],
      type: ['', Validators.required],
      lvl: [pokemon.lvl, [Validators.required, Validators.min(1)]]
    })

    this.types = pokemon.types
    this.evolutions = pokemon.evolutionIds!
    this.abilities = pokemon.abilities!
  }

  validateField(field: string, errorType: string): boolean
  {
    return this.pokemonForm.controls[field].getError(errorType)
      && this.pokemonForm.controls[field].touched
  }

  addType(typesDialog: HTMLDialogElement)
  {
    const type = this.pokemonForm.controls['type'].value

    this.types.push(type)
  
    typesDialog.close()
  }

  addAbility(abilityDialog: HTMLDialogElement)
  {
    const abilityName = this.pokemonForm.controls['abilityName'].value
    const abilityDesc = this.pokemonForm.controls['abilityDesc'].value

    const ability: PokemonAbility = {
      name: abilityName,
      description: abilityDesc
    }

    this.abilities.push(ability)

    abilityDialog.close()
  }

  addEvolution(evolutionDialog: HTMLDialogElement)
  {
    const pokemonEvolutionId = this.pokemonForm.controls['evolutionId'].value
    this.evolutions.push(pokemonEvolutionId)
    evolutionDialog.close()
  }

  showEvolutionMenu(evolutionDialog: HTMLDialogElement)
  {
    console.log(this.pokemonsSnapshots)

    this.pokemonService.getPokemonsSnapshots().subscribe({
      next: (pokemons) => {
        this.pokemonsSnapshots = pokemons
        console.log(this.pokemonsSnapshots)
      },
      error: (error) =>{
        alert(error)
      }
    })

    evolutionDialog.show()
  }

}
