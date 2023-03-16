import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollectionPage } from './collection.page';

const routes: Routes = [
  {
    path: '',
    component: CollectionPage
  },
  {
    path: 'clothing',
    loadChildren: () => import('./clothing/clothing.module').then( m => m.ClothingPageModule)
  },  {
    path: 'carrito',
    loadChildren: () => import('./carrito/carrito.module').then( m => m.CarritoPageModule)
  },
  {
    path: 'pago',
    loadChildren: () => import('./pago/pago.module').then( m => m.PagoPageModule)
  },
  {
    path: 'final',
    loadChildren: () => import('./final/final.module').then( m => m.FinalPageModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./clientes/clientes.module').then( m => m.ClientesPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionPageRoutingModule {}
