import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../user/guards/auth-guard';
import { PokedexLitePageComponent } from './pages/pokedex-lite-page/pokedex-lite-page.component';
import { CreatePokemonComponent } from './components/create-pokemon/create-pokemon.component';

const routes: Routes = [
  { path: '', component: PokedexLitePageComponent, canActivate: [AuthGuard]},
  { path: 'create', component: CreatePokemonComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
