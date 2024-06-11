import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonPageComponent } from './pages/list-pokemon-page/list-pokemon-page.component';
import { AuthGuard } from '../user/guards/auth-guard';

const routes: Routes = [
  { path: '', component: ListPokemonPageComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
