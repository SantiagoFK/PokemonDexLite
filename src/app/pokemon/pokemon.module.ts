import { NgModule } from '@angular/core';
import { ListPokemonComponent } from './components/list-pokemon/list-pokemon.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { SharedModule } from '../shared/shared.module';
import { OnePokemonComponent } from './components/one-pokemon/one-pokemon.component';
import { PokedexLiteComponent } from './components/pokedex-lite/pokedex-lite.component';
import { PokedexLitePageComponent } from './pages/pokedex-lite-page/pokedex-lite-page.component';
import { PokemonFormComponent } from './components/pokemon-form/pokemon-form.component';
import { PokemonCreateComponent } from './components/pokemon-create/pokemon-create.component';
import { PokemonEditComponent } from './components/pokemon-edit/pokemon-edit.component';


@NgModule({
  declarations: [
    ListPokemonComponent,
    OnePokemonComponent,
    PokedexLiteComponent,
    PokedexLitePageComponent,
    PokemonFormComponent,
    PokemonCreateComponent,
    PokemonEditComponent
  ],
  imports: [
    SharedModule, 
    PokemonRoutingModule
  ]
})
export class PokemonModule { }
