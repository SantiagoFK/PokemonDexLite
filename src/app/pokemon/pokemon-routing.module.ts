import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../user/guards/auth-guard';
import { PokedexLitePageComponent } from './pages/pokedex-lite-page/pokedex-lite-page.component';
import { PokemonFormComponent } from './components/pokemon-form/pokemon-form.component';

const routes: Routes = [
  { path: '', component: PokedexLitePageComponent, canActivate: [AuthGuard], title: 'Pokedex - Lite'},
  { path: 'pokemon', component: PokemonFormComponent, canActivate: [AuthGuard], title: 'Add Pokemon'},
  { path: 'pokemon/:id', component: PokemonFormComponent, canActivate: [AuthGuard], title: 'Edit Pokemon'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
