import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../user/guards/auth-guard';
import { PokedexLitePageComponent } from './pages/pokedex-lite-page/pokedex-lite-page.component';
import { CreatePokemonComponent } from './components/create-pokemon/create-pokemon.component';
import { EditPokemonComponent } from './components/edit-pokemon/edit-pokemon.component';

const routes: Routes = [
  { path: '', component: PokedexLitePageComponent, canActivate: [AuthGuard], title: 'Pokedex - Lite'},
  { path: 'create', component: CreatePokemonComponent, canActivate: [AuthGuard], title: 'Add Pokemon'},
  { path: 'edit:id', component: EditPokemonComponent, canActivate: [AuthGuard], title: 'Edit Pokemon'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
