import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './components/list-pokemon/list-pokemon.component';
import { ListPokemonPageComponent } from './pages/list-pokemon-page/list-pokemon-page.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListPokemonComponent,
    ListPokemonPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    PokemonRoutingModule
  ]
})
export class PokemonModule { }
