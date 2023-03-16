import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoesPage } from './shoes.page';

const routes: Routes = [
  {
    path: '',
    component: ShoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoesPageRoutingModule {}
