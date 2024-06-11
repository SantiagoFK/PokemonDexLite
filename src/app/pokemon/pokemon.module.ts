import { NgModule } from '@angular/core';
import { ListPokemonComponent } from './components/list-pokemon/list-pokemon.component';
import { ListPokemonPageComponent } from './pages/list-pokemon-page/list-pokemon-page.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { CreatePokemonComponent } from './components/create-pokemon/create-pokemon.component';
import { ListOnePokemonComponent } from './components/list-one-pokemon/list-one-pokemon.component';
import { EditPokemonComponent } from './components/edit-pokemon/edit-pokemon.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ListPokemonComponent,
    ListPokemonPageComponent,
    CreatePokemonComponent,
    ListOnePokemonComponent,
    EditPokemonComponent
  ],
  imports: [
    SharedModule, 
    PokemonRoutingModule,
    HttpClientModule
  ]
})
export class PokemonModule { }
