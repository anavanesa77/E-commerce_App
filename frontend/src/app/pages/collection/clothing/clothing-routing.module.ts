import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClothingPage } from './clothing.page';

const routes: Routes = [
  {
    path: '',
    component: ClothingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClothingPageRoutingModule {}
