import { NgModule } from '@angular/core';
import { ListPokemonComponent } from './components/list-pokemon/list-pokemon.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { CreatePokemonComponent } from './components/create-pokemon/create-pokemon.component';
import { EditPokemonComponent } from './components/edit-pokemon/edit-pokemon.component';
import { SharedModule } from '../shared/shared.module';
import { OnePokemonComponent } from './components/one-pokemon/one-pokemon.component';
import { PokedexLiteComponent } from './components/pokedex-lite/pokedex-lite.component';
import { PokedexLitePageComponent } from './pages/pokedex-lite-page/pokedex-lite-page.component';


@NgModule({
  declarations: [
    ListPokemonComponent,
    CreatePokemonComponent,
    EditPokemonComponent,
    OnePokemonComponent,
    PokedexLiteComponent,
    PokedexLitePageComponent
  ],
  imports: [
    SharedModule, 
    PokemonRoutingModule
  ]
})
export class PokemonModule { }
