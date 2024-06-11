import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonPageComponent } from './pages/list-pokemon-page/list-pokemon-page.component';

const routes: Routes = [
  { path: '', component: ListPokemonPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
