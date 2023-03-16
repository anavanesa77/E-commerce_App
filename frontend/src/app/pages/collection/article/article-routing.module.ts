import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticlePage } from './article.page';

const routes: Routes = [
  {
    path: '',
    component: ArticlePage
  },  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then( m => m.ProductPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticlePageRoutingModule { }

