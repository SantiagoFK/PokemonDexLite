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
        this.setForm(pokemon)
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
      this.pokemonService.postPokemon(pokemon)
        .subscribe(() => this.router.navigate(['home']))
    }
  }

  setForm(pokemon: Pokemon)
  {

    this.pokemonForm = this.fb.nonNullable.group({
      name: [pokemon.name, [Validators.required]],
      type: ['', Validators.required],
      lvl: [pokemon.lvl, [Validators.required, Validators.min(1)]],
      evolutionId: [''],
      abilityName: [''],
      abilityDesc: ['']
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

  dialogSaveType(typesDialog: HTMLDialogElement)
  {
    const type = this.pokemonForm.controls['type'].value
    
    if(type !== '')
      this.types.push(type)
    
    this.pokemonForm.controls['type'].reset()
  
    typesDialog.close()
  }

  dialogCancelType(typesDialog: HTMLDialogElement)
  {
    this.pokemonForm.controls['type'].reset()
  
    typesDialog.close()
  }

  dialogSaveAbility(abilityDialog: HTMLDialogElement)
  {
    const abilityName = this.pokemonForm.controls['abilityName'].value
    const abilityDesc = this.pokemonForm.controls['abilityDesc'].value

    if(abilityName !== '' && abilityDesc !== '')
    {
      const ability: PokemonAbility = {
        name: abilityName,
        description: abilityDesc
      }  
      
      this.abilities.push(ability)
    }
    
    this.pokemonForm.controls['abilityName'].reset()
    this.pokemonForm.controls['abilityDesc'].reset()

    abilityDialog.close()
  }

  dialogCancelAbility(abilityDialog: HTMLDialogElement)
  {
    this.pokemonForm.controls['abilityName'].reset()
    this.pokemonForm.controls['abilityDesc'].reset()
  
    abilityDialog.close()
  }

  dialogSaveEvolution(evolutionDialog: HTMLDialogElement)
  {
    const pokemonEvolutionId = this.pokemonForm.controls['evolutionId'].value

    if( pokemonEvolutionId !== '' && pokemonEvolutionId !== this.pokemon?.id)
      this.evolutions.push(pokemonEvolutionId)
    
    this.pokemonService.getPokemonById(pokemonEvolutionId).subscribe((pokemon) => {this.evolutionsSnapshots.push(pokemon)})

    evolutionDialog.close()
  }

  dialogCancelEvolution(evolutionDialog: HTMLDialogElement)
  { 
    evolutionDialog.close()
  }

  showEvolutionMenu(evolutionDialog: HTMLDialogElement)
  {
    this.pokemonService.getPokemonsSnapshots().subscribe({
      next: (pokemons) => {
        this.pokemonsSnapshots = pokemons
      },
      error: (error) =>{
        alert(error)
      }
    })

    evolutionDialog.show()
  }

  removeType(typeName: string)
  { 
    this.types = this.types.filter((type) => type !== typeName)
  }

  removeAbility(abilityName: string)
  { 
    this.abilities = this.abilities.filter((ability) => ability.name !== abilityName) 
  }

  removeEvolution(evolutionId: string)
  { 
    this.evolutions = this.evolutions.filter((id) => id !== evolutionId)
  }

}
