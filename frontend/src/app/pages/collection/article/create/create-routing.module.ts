import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';

import { CreatePage } from './create.page';

const routes: Routes = [
  {
    path: '',
    component: CreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),ComponentsModule],
  exports: [RouterModule],
})
export class CreatePageRoutingModule { }
